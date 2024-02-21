"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import Nav from "./nav";
import { cn } from "@/lib/utils";
import { useScrollListener } from "@/lib/events";
import omnifoodLogo from "@/public/img/omnifood-logo.png";

function Header() {
  // the hero class is at the top of the page
  //
  // if the hero class is in view, the header is positioned within the normal flow
  // with a background to match the hero
  //
  // if the hero class is not in view, the header is stuck to the top of the page
  // with a transparent background
  //
  const [stickyClass, setStickyClass] = useState("relative bg-whites-100");
  const [heroInView, setHeroInView] = useState(true);
  useScrollListener((inView) => {
    setHeroInView(inView);
  });

  // update in sync with the render cycle
  useEffect(() => {
    if (heroInView) {
      setStickyClass("relative bg-whites-100");
    } else {
      setStickyClass("sticky top-0 bg-[rgba(255,255,255,0.97)]");
    }
  }, [heroInView]);

  const headerClass = cn(
    "z-40 flex h-24 items-center justify-between px-8 xl:px-12 py-0",
    stickyClass,
  );
  return (
    <header className={headerClass}>
      <Link href="/">
        <Image
          alt="Omnifood logo"
          src={omnifoodLogo}
          className="h-[1.375rem] w-full"
        />
      </Link>
      <p className="before:content-['phone'] md:before:content-['tablet'] lg:before:content-['landscape_tablet'] xl:before:content-['desktop'] 2xl:before:content-['big_desktop']"></p>
      <Nav />
    </header>
  );
}

export default Header;
