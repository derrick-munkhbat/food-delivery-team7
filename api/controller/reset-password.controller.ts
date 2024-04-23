import type { Request, Response } from "express";
import { TokenModel } from "../models/reset-password.models";
import { UserModel } from "../models/user.models";

export async function createToken(req: Request, res: Response) {
  const { email } = req.body;

  const user = await UserModel.findOne({
    Email: email,
  });

  if (!user) {
    return res.status(403);
  }

  // Check if a token already exists for the given email
  const existingToken = await TokenModel.findOne({
    userId: user._id,
  });

  if (existingToken) {
    return res.status(409);
  }

  try {
    await TokenModel.create({
      userId: user._id,
      token: "123",
    });

    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

export async function checkOTP(req: Request, res: Response) {
  const { email, otp, password } = req.body;

  const token = TokenModel.findOne({
    Email: email,
    token: otp,
    password: password,
  });

  if (!token) {
    return res.status(403).json({ message: "Invalid OTP" });
  }

  // If the OTP is valid, it grants access by setting the response status to 200 and sending a message.
  try {
    res.status(200).json({ message: "OTP verified", token });
  } catch (error) {
    // If there's an error in the try block, it logs the error and sets the response status to 500 with no response body.
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
