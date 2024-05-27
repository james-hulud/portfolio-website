"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import ThemeChanger from "./ThemeChanger";

const NavChanger = () => {
  const [mounted, setMounted] = useState(false);
  const [menuPosition, setMenuPosition] = useState(-100);
  const { theme } = useTheme();
  const { isMd } = useBreakpoint("md");
  const { isLg } = useBreakpoint("lg");

  const moveMenu = () => {
    if (menuPosition == -100) setMenuPosition(0);
    else setMenuPosition(-100);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return !isMd || !isLg ? (
    theme === "light" ? (
      <div className="p-0 m-0">
        <HamburgerMenu menuPosValue={menuPosition} theme={theme} />
        <ul className="flex [&>*]:m-2 [&>*]:p-1 [&>*]:transition [&>*]:duration-200">
          <li className="hover:scale-110 themed-element-hover flex items-center border-none">
            <label htmlFor="hamburger">
              <Image
                src="/nav/menu.svg"
                width={25}
                height={25}
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
    ) : (
      <div className="p-0 m-0">
        <HamburgerMenu menuPosValue={menuPosition} theme={theme} />
        <ul className="flex [&>*]:m-2 [&>*]:p-1 [&>*]:transition [&>*]:duration-200">
          <li className="hover:scale-110 themed-element-hover flex items-center border-none">
            <label htmlFor="hamburger">
              <Image
                src="/nav/menu white.svg"
                width={25}
                height={25}
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
    )
  ) : (
    <ul className="flex [&>*]:border-b [&>*]:border-gray [&>*]:m-2 [&>*]:p-1 [&>*]:transition [&>*]:duration-200">
      <li className="hover:scale-110 themed-element-hover">
        <Link href="/">
          <button>Home</button>
        </Link>
      </li>
      <li className="hover:scale-110 themed-element-hover">
        <Link href="/about">
          <button>About</button>
        </Link>
      </li>
      <li className="hover:scale-110 themed-element-hover">
        <Link href="/portfolio">
          <button>Portfolio</button>
        </Link>
      </li>
      <li className="hover:scale-110 themed-element-hover">
        <Link href="/blog">
          <button>Blog</button>
        </Link>
      </li>
      <li className="hover:scale-110 themed-element-hover">
        <Link href="/contact">
          <button>Contact Me</button>
        </Link>
      </li>
      <li className="hover:scale-110 themed-element-hover flex items-center">
        <ThemeChanger />
      </li>
    </ul>
  );
};

const Nav = () => {
  return (
    <nav className="shadow-xl bg-gray-200 nav-bg-theme">
      <div className="flex justify-between py-5 px-10">
        <div className="font-extrabold justify-center content-center">
          <Link href="/">JAMESMDEV.COM</Link>
        </div>
        <div className="flex items-center">
          <NavChanger />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
