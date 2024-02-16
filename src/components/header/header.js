"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import Nav from "./nav";
import { cn } from "@/lib/utils";
import { useScrollListener } from "@/lib/events";

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

  const imgScale = 0.135;
  const imgWidth = 1212 * imgScale;
  const imgHeight = 163 * imgScale;
  const headerClass = cn(
    "z-10 flex h-24 items-center justify-between px-8 xl:px-12 py-0",
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
