import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { Login } from "@/components/Login";
import { SignUp } from "@/components/SignUp";
import { Sign } from "crypto";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Login/>
      <SignUp/>
      {/* hello team, this is the homepage. */}
      <Footer />

    </div>
  );
}
