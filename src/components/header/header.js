"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import Nav from "./Nav";
import { cn } from "../../lib/utils";

function Header() {
  const [stickyClass, setStickyClass] = useState("relative bg-whites-100");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass("sticky top-0 bg-[rgba(255,255,255,0.97)]")
        : setStickyClass("relative bg-whites-100");
    }
  };

  const imgScale = 0.135;
  const imgWidth = 1212 * imgScale;
  const imgHeight = 163 * imgScale;
  const headerClass = cn(
    "z-10 flex h-24 items-center justify-between px-10 py-0",
    stickyClass,
  );
  return (
    <header className={headerClass}>
      <Link href="/">
        <Image
          alt="Omnifood logo"
          src="/img/omnifood-logo.png"
          width={imgWidth}
          height={imgHeight}
        />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
