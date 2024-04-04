import { UserModel } from "../models/user.models";

export async function getUser(_req:any, res:any) {
    const user = await UserModel.find();
  
    res.json(user);
  }
  
  export async function createUser(req:any, res:any) {
    const user = await UserModel.create({
      userName: "ganaa",
      userEmail: "gana@gmail.com",
      userNumber: 88086559,
      userPassword: "lolcioropass"
    });
  
    res.json(user);
  }