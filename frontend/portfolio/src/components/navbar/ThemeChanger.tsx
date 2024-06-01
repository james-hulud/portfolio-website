"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isMd } = useBreakpoint("md");
  const { isLg } = useBreakpoint("lg");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return theme === "light" ? (
    <button onClick={() => setTheme("dark")}>
      {!isMd && !isLg ? (
        <Image src="/nav/moon.svg" width={30} height={30} alt="dark_mode" />
      ) : (
        <Image src="/nav/moon.svg" width={20} height={20} alt="dark_mode" />
      )}
    </button>
  ) : (
    <button onClick={() => setTheme("light")}>
      {!isMd && !isLg ? (
        <Image
          src="/nav/sun white.svg"
          width={30}
          height={30}
          alt="light_mode"
        />
      ) : (
        <Image
          src="/nav/sun white.svg"
          width={20}
          height={20}
          alt="light_mode"
        />
      )}
    </button>
  );
};

export default ThemeChanger;
