import type { NextFunction, Request, Response } from "express";


export function checkAdmin(req: Request, res: Response, next: NextFunction) {
 const {Role} = req.body
 const adminCheck = req.get("data");
  if (adminCheck) {
    return res.sendStatus(400).send("admin bish bn");
  }

  try {
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
}
const cors = require("cors");

