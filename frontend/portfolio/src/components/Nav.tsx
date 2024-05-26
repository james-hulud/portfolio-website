"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return theme === "light" ? (
    <button onClick={() => setTheme("dark")}>
      <Image src="/nav/sun.svg" width={20} height={20} alt="light_mode" />
    </button>
  ) : (
    <button onClick={() => setTheme("light")}>
      <Image src="/nav/moon white.svg" width={20} height={20} alt="dark_mode" />
    </button>
  );
};

const Nav = () => {
  return (
    <nav className="shadow-xl bg-gray-100 nav-bg-theme">
      <div className="flex justify-between py-5 px-10">
        <div className="font-extrabold justify-center content-center">
          <Link href="/">JAMESMDEV.COM</Link>
        </div>
        <div className="flex items-center">
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
        </div>
      </div>
    </nav>
  );
};

export default Nav;
