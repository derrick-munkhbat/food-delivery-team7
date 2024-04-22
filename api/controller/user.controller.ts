import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.models";
import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import { checkAdmin } from "../middleware/admin";

const secret = "secret_string123";
export async function getUser(req: Request, res: Response) {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "User not logged in!" });

  const decoded = jwt.verify(accessToken , secret);
  const email = decoded.Email;

  const user = await UserModel.findOne({
    Email: email,
  }).select("-Password");

  res.json(user);
}

export async function createUser(req: any, res: any) {
  const { Name, Email, Password, Role } = req.body;

  //hereglegciin email shalgah
  const existingUser = await UserModel.findOne({ Email });
  if (existingUser) return res.status(400).send("Email already exists");

  //password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(Password, salt);

  const newUser = await UserModel.create({
    Name,
    Email,
    Password: hashedPassword,
    Role,
  });
  res.sendStatus(201).send("welcome");
  res.json(newUser);
}

export async function  loginUser(req:any, res:any) {
  const {Email , Password, Role} = req.body;

  const user = await UserModel.findOne({Email });
  const userRole = await UserModel.findOne({Role});
  console.log(userRole)
  if(!user) return  res.sendStatus(400).send('invalid email')
  
 if(user.Password){
  const validPassword = await bcrypt.compare(Password , `${user.Password}`);
  if (!validPassword) return res.status(400).send('Invalid password');
 }
 const loggedIn = true;
 if(Role===user.Role){
  const accessToken = jwt.sign({ userEmail: Email }, "SUPER_SECRET");
  res.json({ accessToken });
  res.sendStatus(202).send('admin mon baina')
 }

if (loggedIn) {
  const accessToken = jwt.sign({ Email: Email }, "secret_string123");
  res.json({accessToken });
}
res.sendStatus(401).send("asas");
  //   const {userEmail , userPassword} = req.body;

  //   const user = await UserModel.findOne({userEmail});
  //   if(!user) return  res.sendStatus(400).send('invalid email')
  //   // const validPassword = await UserModel.findOne({userPassword});

  //   const loggedIn = true;
  // if (loggedIn) {
  //   const accessToken = jwt.sign({ userEmail: userEmail }, "secret_string123");
  //   res.json(user, { accessToken });
  // }
  // res.sendStatus(401);
}

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { Name, Email, Password } = req.body;

  try {
    const user = await UserModel.findByIdAndUpdate(userId, {
      Name,
      Email,
      Password,
    });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(403);
  }
};
