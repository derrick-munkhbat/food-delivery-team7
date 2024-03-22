import { mobileMenuItems } from "./mobileMenuItems";

export function MobileHeaderMenu() {
  return (
    <>
      <div className="flex flex-col  gap-5 mt-4 font-bold font-sans border-t-4">
        {mobileMenuItems.map((item) => (
          <a key={item.id} className="px-2 py4 " href={item.link}>
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
}
