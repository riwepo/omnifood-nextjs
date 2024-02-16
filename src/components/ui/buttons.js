import Link from "next/link";

import { cn } from "@/lib/utils";

const commonClasses =
  "inline-block rounded-lg px-8 py-4 text-xl font-semibold transition-all duration-300";

export function Button1({ href, children, extraClasses }) {
  const classes = cn(
    commonClasses,
    "bg-burnt-orange-100 text-white hover:bg-burnt-orange-200 active:bg-burnt-orange-200",
    extraClasses,
  );
  return (
    <Link href={href} className={classes}>
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

// .btn--form {
//   background-color: #45260a;
//   color: #fdf2e9;
//   align-self: end;
//   padding: 1.2rem;
// }

// .btn--form:hover {
//   background-color: #fff;
//   color: #555;
// }

// .btn,
// .btn:link,
// .btn:visited {
//   display: inline-block;

//   text-decoration: none;
//   font-size: 2rem;
//   font-weight: 600;
//   padding: 1.6rem 3.2rem;
//   border-radius: 9px;

//   /* Only necessary for .btn */
//   border: none;
//   cursor: pointer;
//   font-family: inherit;

//   /* Put transition on original "state" */
//   /* transition: background-color 0.3s; */
//   transition: all 0.3s;
// }

// .btn--full:link,
// .btn--full:visited {
//   background-color: #e67e22;
//   color: #fff;
// }

// .btn--full:hover,
// .btn--full:active {
//   background-color: #cf711f;
// }

// .btn--outline:link,
// .btn--outline:visited {
//   background-color: #fff;
//   color: #555;
// }

// .btn--outline:hover,
// .btn--outline:active {
//   background-color: #fdf2e9;

//   /* border: 3px solid #fff; */

//   /* Trick to add border inside */
//   box-shadow: inset 0 0 0 3px #fff;
// }
