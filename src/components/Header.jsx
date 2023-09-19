"use client";

import React, { useEffect, useState } from "react";
// import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "@/img/svg/vercel.svg";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Header() {
  const [theme, setTheme] = useState("light");

  const setThemeToLocalStorage = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setThemeToLocalStorage("dark");
    } else {
      setThemeToLocalStorage("light");
    }

    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header className="z-10 w-full max-w-5xl items-center justify-end font-mono text-sm lg:flex h-14 absolute">
      <div className="flex h-12 w-full items-center justify-center lg:static lg:h-auto lg:w-auto lg:bg-none gap-5">
        <a
          className="cursor-pointer"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={logo}
            alt="Vercel Logo"
            className="invert h-6 w-fit m-1"
            priority
          />
        </a>
        <button className={`p-1 text-white hover:scale-125 ${inter.className}`}>
          Sign in
        </button>
        <button className={`p-1 text-white hover:scale-125 ${inter.className}`}>
          Sign Up
        </button>
        <button
          onClick={() =>
            setThemeToLocalStorage(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark" ? (
            <MdLightMode className="w-7 h-7" color="white" />
          ) : (
            <MdDarkMode className="w-7 h-7" color="white" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
