import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function checkAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.get("access-token");
  if (token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJnYW50b2d0b2toQGdtYWlsLmNvbSIsImlhdCI6MTcxMzQzNDMxM30.lBg5fKgoiXQfJouyl8csytfKEKEOV5cVFr6g9Z9Xu8k") {
    return res.sendStatus(201);
  }

//   try {
//     let decoded = jwt.verify(token, "secret_string123");
//     console.log({ decoded });
//     next();
//   } catch (err) {
//     return res.sendStatus(403);
//   }
}