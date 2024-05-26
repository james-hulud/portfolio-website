import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = (props: { darkMode: boolean }) => {
  return (
    <nav className="shadow-xl bg-gray-50">
      <div className="flex justify-between py-5 px-10">
        <div className="font-extrabold justify-center content-center">
          <Link href="/">JAMESMDEV.COM</Link>
        </div>

        <div className="flex items-center">
          <ul className="flex [&>*]:border [&>*]:border-gray [&>*]:m-2 [&>*]:rounded [&>*]:p-1 [&>*]:transition [&>*]:duration-200">
            <li className="hover:scale-110 hover:bg-gray-100">
              <Link href="/">
                <button>Home</button>
              </Link>
            </li>
            <li className="hover:scale-110 hover:bg-gray-100">
              <Link href="/about">
                <button>About</button>
              </Link>
            </li>
            <li className="hover:scale-110 hover:bg-gray-100">
              <Link href="/portfolio">
                <button>Portfolio</button>
              </Link>
            </li>
            <li className="hover:scale-110 hover:bg-gray-100">
              <Link href="/blog">
                <button>Blog</button>
              </Link>
            </li>
            <li className="hover:scale-110 hover:bg-gray-100">
              <Link href="/contact">
                <button>Contact Me</button>
              </Link>
            </li>
            <li className="hover:scale-110 hover:bg-gray-100">
              <button>
                {props.darkMode ? (
                  <Image
                    src="/nav/moon.svg"
                    width={20}
                    height={20}
                    alt="dark_mode"
                  />
                ) : (
                  <Image
                    src="/nav/sun.svg"
                    width={20}
                    height={20}
                    alt="dark_mode"
                  />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
