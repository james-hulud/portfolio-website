"use client";

import Link from "next/link";
import ThemeChanger from "./ThemeChanger";
import { useTheme } from "next-themes";

const HamburgerMenu = (props: {
  menuPosValue: number;
  theme: string | undefined;
}) => {
  const { theme } = useTheme();

  return theme === "light" ? (
    <div
      id="menu"
      className={`fixed text-2xl top-0 left-0 w-[50vw] h-full content-center items-center bg-white bg-opacity-60 backdrop-blur-lg z-50`}
      style={{
        left: `${props.menuPosValue}%`,
        transition: "left 0.5s ease",
      }}
    >
      <ul className="flex flex-col items-center [&>*]:border-b [&>*]:border-gray [&>*]:m-2 [&>*]:p-1 [&>*]:transition [&>*]:duration-200">
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
    </div>
  ) : (
    <div
      id="menu"
      className={`fixed text-2xl top-0 left-0 w-[50vw] h-full content-center items-center bg-black bg-opacity-60 backdrop-blur-lg z-50`}
      style={{
        left: `${props.menuPosValue}%`,
        transition: "left 0.5s ease",
      }}
    >
      <ul className="flex flex-col items-center [&>*]:border-b [&>*]:border-gray [&>*]:m-2 [&>*]:p-1 [&>*]:transition [&>*]:duration-200">
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
    </div>
  );
};

export default HamburgerMenu;
