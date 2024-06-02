"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

type LinksDict = {
  [key: string]: string;
};

const LinksBanner = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const links: LinksDict =
    theme === "light"
      ? {
          ["github"]: "/external/github.svg",
          ["linkedin"]: "/external/social-linkedin.svg",
        }
      : {
          ["github"]: "/external/github white.svg",
          ["linkedin"]: "/external/social-linkedin white.svg",
        };

  return (
    <div className="flex items-center justify-center mx-5">
      <Link
        className="flex items-center font-extrabold text-xl transition hover:scale-110 duration-200"
        href="https://github.com/james-hulud"
      >
        <Image
          src={links["github"]}
          className="object-contain"
          width={30}
          height={30}
          alt="github"
        />
      </Link>
      <Link
        className="flex items-center font-extrabold text-xl transition hover:scale-110 duration-200 ml-4"
        href="https://www.linkedin.com/in/james-davies-666665296/"
      >
        <Image
          src={links["linkedin"]}
          className="object-contain"
          width={40}
          height={40}
          alt="linkedin"
        />
      </Link>
    </div>
  );
};

export default LinksBanner;
