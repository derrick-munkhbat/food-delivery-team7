import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.models";

export async function getUser(_req:any, res:any) {
    const user = await UserModel.find();
  
    res.json(user);
  }
  
  export async function createUser(req:any, res:any) {
    const { userName, userEmail, userPassword, pass } = req.body;
    const user = await UserModel.create({
      userName,
      userEmail,
      userPassword,
    });
    
  
    res.json(user);
  }
  export async function loginUser(req:any, res:any) {
    const {userEmail , userPassword} = req.body;
  
    const user = await UserModel.find();

    const loggedIn = true;
  if (loggedIn) {
    const accessToken = jwt.sign({ userEmail: userEmail }, "secret_string123");
    res.json({ accessToken });
  }
  res.sendStatus(401);
  }
  