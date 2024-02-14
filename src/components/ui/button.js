import Link from "next/link";

import { cn } from "../../lib/utils";

function Button({ href, full, children, extraClasses }) {
  let classes;
  if (full) {
    classes = cn(
      "inline-block rounded-lg bg-burnt-orange-100 px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:bg-burnt-orange-200 active:bg-burnt-orange-200",
      extraClasses,
    );
  } else {
    classes = cn(
      "inline-block rounded-lg bg-white px-8 py-4 text-xl font-semibold text-greys-200 transition-all duration-300 hover:bg-whites-100 active:bg-whites-100 hover:shadow-inner active:shadow-inner",
      extraClasses,
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export default Button;

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
