"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import ThemeChanger from "./ThemeChanger";
import HamburgerIcon from "./HamburgerIcon";

const NavChanger = () => {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();
  const { isMd } = useBreakpoint("md");
  const { isLg } = useBreakpoint("lg");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return !isMd || !isLg ? (
    <div>
      <HamburgerIcon theme={theme} />
    </div>
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
    <nav className="shadow-xl bg-gray-100 nav-bg-theme">
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
