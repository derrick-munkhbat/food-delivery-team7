import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function checkAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.get("access-token");

  if (!token) {
    return res.sendStatus(403);
  }

  try {
    jwt.verify(token, "secret_string123");
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
}
