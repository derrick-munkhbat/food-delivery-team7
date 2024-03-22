<<<<<<< Updated upstream:ui/src/components/header/MainMenu.tsx
import { mainMenuItems } from "./mainMenuItems";
=======
import { mainMenuitems } from "./mainMenuItems";
>>>>>>> Stashed changes:ui/src/components/Data/MainMenu.tsx

export function Mainmenu() {
  return (
    <>
      <div className="flex  p-2 md:flex items-center justify-center flex-1 gap-10 ">
<<<<<<< Updated upstream:ui/src/components/header/MainMenu.tsx
        {mainMenuItems.map((item) => (
=======
        {mainMenuitems.map((item) => (
>>>>>>> Stashed changes:ui/src/components/Data/MainMenu.tsx
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
