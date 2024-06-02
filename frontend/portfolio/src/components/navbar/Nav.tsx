"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import ThemeChanger from "./ThemeChanger";
import HamburgerIcon from "./HamburgerIcon";
import LinksBanner from "../about/LinksBanner";

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

  return !isMd && !isLg ? (
    <div>
      <HamburgerIcon theme={theme} />
    </div>
  ) : (
    <ul className="flex [&>*]:border-b [&>*]:border-gray-300 [&>*]:m-2 [&>*]:p-1">
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
  );
};

const Nav = () => {
  return (
    <nav className="shadow-lg bg-gray-100 nav-bg-theme">
      <div className="flex justify-between py-5 px-10">
        <div className="flex font-extrabold items-center">
          <Link href="/">JAMESMDAVIES.COM</Link>
          <LinksBanner />
        </div>
        <div className="flex items-center">
          <NavChanger />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
