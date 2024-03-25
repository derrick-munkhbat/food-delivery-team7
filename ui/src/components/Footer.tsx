import { LogoMain } from "../../public/LogoMain";
import { FacebookLogo } from "../../public/Social/FacebookIcon";
import { InstagramLogo } from "../../public/Social/InstagramIcon";
import { TwitterLogo } from "../../public/Social/TwitterIcon";

import { menuItems } from "@/components/header/mainMenuItems";

export function Footer() {
  return (
    <div className="bg-[#18BA51]">
      <div className="footer footer-center bg-footer-texture">
        <div className="container grid gap-10 mx-auto p-[120px]">
          <LogoMain />
          <div className="flex lg:justify-between md:flex-col md:gap-2 sm:flex-col sm:gap-2 lg:flex-row w-full">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-white font-semibold decoration-1 decoration-solid underline-offset-1"
              >
                {item.name}
              </a>
            ))}
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
    </div>
  );
}
