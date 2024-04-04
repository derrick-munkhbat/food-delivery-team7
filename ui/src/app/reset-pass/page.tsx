"use client";

import { useState } from "react";
import PassResetByEmail from "./PassResetByEmail";
import PassResetByCode from "./PassResetByCode";
import PassResetByNewPass from "./PassResetByNewPass";

export default function Home() {
  const [step, setStep] = useState("EMAIL"); //email, otp, password

  switch (step) {
    case "EMAIL":
      return <PassResetByEmail />;

    case "OTP":
      return <PassResetByCode />;

    case "PASS":
      return <PassResetByNewPass />;
    default:
      return null;
  }
}
