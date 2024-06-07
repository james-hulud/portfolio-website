"use client";

import Link from "next/link";
import ThemeChanger from "./ThemeChanger";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const HamburgerMenu = (props: {
  menuPosValue: number;
  theme: string | undefined;
}) => {
  const { theme } = useTheme();
  const [orientation, setOrientation] = useState(getOrientation());

  function getOrientation() {
    return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  }

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(getOrientation());
    };

    window.addEventListener("resize", handleOrientationChange);
    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  const backgroundColour = theme === "dark" ? "bg-black" : "bg-gray-100";

  return (
    <div
      id="menu"
      className={`p-0 m-0 fixed text-2xl top-0 left-0 w-[50vw] h-full flex items-center justify-center bg-opacity-80 backdrop-blur-lg z-50 ${backgroundColour}`}
      style={{
        left: `${props.menuPosValue}%`,
        transition: "left 0.5s ease",
      }}
    >
      {orientation === "landscape" ? (
        <ul className="grid grid-cols-2 gap-4 [&>*]:m-2">
          <li className="flex justify-center">
            <Link
              href="/"
              className="hover:scale-110 border-b border-gray-300 transition duration-200 themed-element-hover"
            >
              <button className="pb-1">Home</button>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              href="/about"
              className="hover:scale-110 border-b border-gray-300 transition duration-200 themed-element-hover"
            >
              <button className="pb-1">About</button>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              href="/portfolio"
              className="hover:scale-110 border-b border-gray-300 transition duration-200 themed-element-hover"
            >
              <button className="pb-1">Portfolio</button>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              href="/blog"
              className="hover:scale-110 border-b border-gray-300 transition duration-200 themed-element-hover"
            >
              <button className="pb-1">Blog</button>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              href="/contact"
              className="hover:scale-110 border-b border-gray-300 transition duration-200 themed-element-hover"
            >
              <button className="pb-1">Contact Me</button>
            </Link>
          </li>
          <li className="flex justify-center">
            <ThemeChanger />
          </li>
        </ul>
      ) : (
        <ul className="flex flex-col items-center [&>*]:border-b [&>*]:border-gray-300 [&>*]:m-2 [&>*]:p-1">
          <Link
            href="/"
            className="transition duration-200 hover:scale-110 themed-element-hover"
          >
            <button>Home</button>
          </Link>
          <Link
            href="/about"
            className="transition duration-200 hover:scale-110 themed-element-hover"
          >
            <button>About</button>
          </Link>
          <Link
            href="/portfolio"
            className="transition duration-200 hover:scale-110 themed-element-hover"
          >
            <button>Portfolio</button>
          </Link>
          <Link
            href="/blog"
            className="transition duration-200 hover:scale-110 themed-element-hover"
          >
            <button>Blog</button>
          </Link>
          <Link
            href="/contact"
            className="transition duration-200 hover:scale-110 themed-element-hover"
          >
            <button>Contact Me</button>
          </Link>
          <ThemeChanger />
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
