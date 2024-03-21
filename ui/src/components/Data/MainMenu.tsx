import { MainMenuitems } from "./MainMenuItrems";

export function Mainmenu() {
  return (
    <>
      <div className="flex  p-2 md:flex items-center justify-center flex-1 gap-10 ">
        {MainMenuitems.map((item) => (
          <a
            key={item.id}
            className="px-2 py4 border-l-violet-200"
            href={item.link}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
