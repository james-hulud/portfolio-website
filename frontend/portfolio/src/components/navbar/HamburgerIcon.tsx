import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";
import { useTheme } from "next-themes";

const HamburgerIcon = () => {
  const [menuPosition, setMenuPosition] = useState(-100);
  const { theme } = useTheme();

  const moveMenu = () => {
    if (menuPosition == -100) setMenuPosition(0);
    else setMenuPosition(-100);
  };

  useEffect(() => {
    const closeMenuFromOutsideClick = (e: MouseEvent) => {
      if (
        e.target &&
        !(e.target as HTMLElement).closest("#hamburger-icon") &&
        menuPosition !== 0
      ) {
        setMenuPosition(-100);
      }
    };
    document.body.addEventListener("click", closeMenuFromOutsideClick);

    return () => {
      document.body.removeEventListener("click", closeMenuFromOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hamburgerIcon = theme === "light" ? "menu.svg" : "menu white.svg";

  return (
    <div id="hamburger-icon">
      <HamburgerMenu menuPosValue={menuPosition} theme={theme} />
      <ul className="flex [&>*]:transition [&>*]:duration-200">
        <li className="hover:scale-110 themed-element-hover flex items-center">
          <label htmlFor="hamburger">
            <Image
              src={`/nav/${hamburgerIcon}`}
              width={40}
              height={40}
              alt="light_mode"
            />
          </label>
          <input
            className="hidden"
            id="hamburger"
            type="checkbox"
            onClick={moveMenu}
          />
        </li>
      </ul>
    </div>
  );
};

export default HamburgerIcon;
