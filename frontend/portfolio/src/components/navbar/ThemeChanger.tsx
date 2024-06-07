"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { isLg } = useBreakpoint("lg");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return resolvedTheme === "light" ? (
    <button
      onClick={() => setTheme("dark")}
      className="transition duration-200 hover:scale-110 themed-element-hover border-b border-gray-300"
    >
      {!isLg ? (
        <Image
          src="/nav/moon.svg"
          width={30}
          height={30}
          alt="dark_mode"
          className="pb-1"
        />
      ) : (
        <Image
          src="/nav/moon.svg"
          width={20}
          height={20}
          alt="dark_mode"
          className="pb-1"
        />
      )}
    </button>
  ) : (
    <button
      onClick={() => setTheme("light")}
      className="transition duration-200 hover:scale-110 themed-element-hover border-b border-gray-300"
    >
      {!isLg ? (
        <Image
          src="/nav/sun white.svg"
          width={30}
          height={30}
          alt="light_mode"
          className="pb-1"
        />
      ) : (
        <Image
          src="/nav/sun white.svg"
          width={20}
          height={20}
          alt="light_mode"
          className="pb-1"
        />
      )}
    </button>
  );
};

export default ThemeChanger;
