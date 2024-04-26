import type { Request, Response } from "express";
import { TokenModel } from "../models/token.models";
import { UserModel } from "../models/user.models";
import crypto from "crypto";
import bcrypt from "bcrypt";

export async function createToken(req: Request, res: Response) {
  const { email } = req.body;

  const user = await UserModel.findOne({
    Email: email,
  });

  if (!user) {
    return res.status(403);
  }

  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, 10);

  try {
    await TokenModel.create({
      email,
      token: hash,
    });

    res.status(200).json({
      link: `http://localhost:3000/passwordReset?token=${resetToken}&email=${user.Email}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

export async function resetPassword(req: Request, res: Response) {
  const { token, email, password } = req.body;

  if (!token) {
    res.status(403);
    return;
  }

  try {
    const passwordResetToken = await TokenModel.findOne({ email });

    if (!passwordResetToken) {
      res.status(403);
      return;
    }

    const isValid = await bcrypt.compare(
      String(token),
      passwordResetToken.token
    );
    if (!isValid) {
      res.status(403);
      return;
    }

    const hash = await bcrypt.hash(String(password), 10);

    const updateUser = await UserModel.findOneAndUpdate(
      { Email: email },
      { password: hash },
      { new: true }
    );

    await passwordResetToken.deleteOne();

    console.log(updateUser);

    res.status(200);
  } catch (error) {
    console.log(error);
  }
}
