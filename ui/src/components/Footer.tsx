import { LogoMain } from "../../public/LogoMain";
import { FacebookLogo } from "../../public/Social/FacebookIcon";
import { InstagramLogo } from "../../public/Social/InstagramIcon";
import { TwitterLogo } from "../../public/Social/TwitterIcon";
<<<<<<< Updated upstream:ui/src/components/Footer.tsx
<<<<<<< HEAD:ui/src/components/Footer.tsx
import { menuItems } from "./header/mainMenuItems";
=======
import { menuItems } from "@/components/header/mainMenuItems";
>>>>>>> b1e8e56 (admin):ui/src/app/Footer.tsx
=======
// import { menuItems } from "@/components/Data/menuItems";
>>>>>>> Stashed changes:ui/src/app/Footer.tsx

export function Footer() {
  return (
    <div className="footer footer-center bg-[#18BA51] relative">
      <div className="container grid gap-10 mx-auto p-[120px]">
        <LogoMain />
        <div className="flex lg:justify-between md:flex-col md:gap-2 lg:flex-row w-full">
<<<<<<< Updated upstream:ui/src/components/Footer.tsx
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="text-white font-semibold decoration-1 decoration-solid underline-offset-1"
            >
              {item.name}
            </a>
          ))}
=======
          {/* {menuItems.map((item) => (
                <a key={item.id} href={item.link} className="text-white font-semibold decoration-1 decoration-solid underline-offset-1">{item.name}</a>
            ))} */}
>>>>>>> Stashed changes:ui/src/app/Footer.tsx
        </div>
        <div className="flex gap-[18px]">
          <FacebookLogo />
          <InstagramLogo />
          <TwitterLogo />
        </div>
        <div className="grid gap-2">
          <p className="text-white">© 2024 Pinecone Foods LLC </p>
          <p className="text-white">Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </div>
  );
}
