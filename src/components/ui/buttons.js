import Link from "next/link";

import { cn } from "@/lib/utils";

const commonClasses =
  "inline-block rounded-lg px-8 py-4 text-xl font-semibold transition-all duration-300";

export function Button1({ href, onClick, children, extraClasses }) {
  const classes = cn(
    commonClasses,
    "bg-burnt-orange-100 text-white hover:bg-burnt-orange-200 active:bg-burnt-orange-200",
    extraClasses,
  );
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Button2({ href, children, extraClasses }) {
  const classes = cn(
    commonClasses,
    "bg-white text-greys-200 hover:bg-whites-100 active:bg-whites-100 hover:shadow-inner active:shadow-inner",
    extraClasses,
  );
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Button3({ href, children, extraClasses }) {
  const classes = cn(
    commonClasses,
    "self-end p-3 bg-burnt-orange-300 text-whites-100 hover:bg-white hover:text-greys-200  ",
    extraClasses,
  );
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
