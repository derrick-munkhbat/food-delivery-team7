import { menuItems } from "./Data/MenuItems";
import { LogoMain } from "../../public/LogoMain";
import { FacebookLogo } from "../../public/Social/FacebookIcon";
import { InstagramLogo } from "../../public/Social/InstagramIcon";
import { TwitterLogo } from "../../public/Social/TwitterIcon";
import { FooterBg } from "../../public/FooterBg";

// type items = Array<{ id: number; name: string; link: string }>;

export function Footer({}) {
  return (
    <div className="footer footer-center w-full bg-[#18BA51] relative">
      <div className="absolute left-0 top-0">
        <FooterBg />
      </div>
      <div className="container grid gap-10 mx-auto p-[120px]">
        <LogoMain />
        <div className="flex justify-between w-full">
          {/* {items.map((item) => (
                <a key={item.id} href={item.link} className="text-white font-semibold decoration-1 decoration-solid underline-offset-1">{item.name}</a>
            ))} */}
          <a className="text-white font-semibold decoration-1 decoration-solid underline-offset-1">
            Нүүр
          </a>
          <a className="text-white font-semibold decoration-1 decoration-solid underline-offset-1">
            Холбоо барих
          </a>
          <a className="text-white font-semibold decoration-1 decoration-solid underline-offset-1">
            Хоолны цэс
          </a>
          <a className="text-white font-semibold decoration-1 decoration-solid underline-offset-1">
            Үйлчилгээний нөхцөл
          </a>
          <a className="text-white font-semibold decoration-1 decoration-solid underline-offset-1">
            Хүргэлтийн бүс
          </a>
          <a className="text-white font-semibold decoration-1 decoration-solid underline-offset-1">
            Нууцлалын бодлого
          </a>
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
