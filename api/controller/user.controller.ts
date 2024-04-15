import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.models";
import bcrypt from "bcrypt";

export async function getUser(_req: any, res: any) {
  const user = await UserModel.find();

  res.json(user);
}

export async function createUser(req: any, res: any) {
  const {userName , userEmail , userPassword} = req.body

  //hereglegciin email shalgah
  const existingUser = await UserModel.findOne({ userEmail });
  if (existingUser) return res.status(400).send('Email already exists');

  //password 
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userPassword, salt);


  const newUser = await UserModel.create({
    userName,
    userEmail,
    userPassword: hashedPassword,
  });
  res.sendStatus(201).send('welcome')
  res.json(newUser);
}
export async function loginUser(req:any, res:any) {
  const {userEmail , userPassword} = req.body;

  const user = await UserModel.findOne({userEmail });
  if(!user) return  res.sendStatus(400).send('invalid email')
  
 
  const validPassword = await bcrypt.compare(userPassword , `${user.userPassword}`);
  if (!validPassword) return res.status(400).send('Invalid password');

  const loggedIn = true;
if (loggedIn) {
  const accessToken = jwt.sign({ userEmail: userEmail }, "secret_string123");
  res.json({ accessToken });
}
res.sendStatus(401);

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

