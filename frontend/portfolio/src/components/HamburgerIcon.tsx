import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";

const HamburgerIcon = (props: { theme: string | undefined }) => {
  const [menuPosition, setMenuPosition] = useState(-100);

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
  }, []);

  return (
    <div id="hamburger-icon" className="p-0 m-0">
      <HamburgerMenu menuPosValue={menuPosition} theme={props.theme} />
      <ul className="flex [&>*]:m-2 [&>*]:p-1 [&>*]:transition [&>*]:duration-200">
        <li className="hover:scale-110 themed-element-hover flex items-center border-none">
          <label htmlFor="hamburger">
            {props.theme === "light" ? (
              <Image
                src="/nav/menu.svg"
                width={30}
                height={30}
                alt="light_mode"
              />
            ) : (
              <Image
                src="/nav/menu white.svg"
                width={30}
                height={30}
                alt="light_mode"
              />
            )}
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
