import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button1 } from "../ui/buttons";

function Nav({ isNavOpen, onClick }) {
  const router = useRouter();
  const navLinkData = [
    { id: 1, href: "#how", name: "How it works" },
    { id: 2, href: "#meals", name: "Meals" },
    { id: 3, href: "#testimonials", name: "Testimonials" },
    { id: 4, href: "#pricing", name: "Pricing" },
  ];
  const translate = isNavOpen ? "translate-x-0" : "translate-x-full";

  // this is used as a signal to close the mobile navigation
  const handleClick = async function (e) {
    onClick();
    await router.push(e.target.href);
  };

  return (
    <nav
      className={`${translate} absolute left-0 top-0 flex h-[100vh] w-full items-center justify-center bg-[rgba(255,255,255,0.5)] backdrop-blur transition-all duration-500 md:relative md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:backdrop-blur-none`}
    >
      <ul className="flex list-none flex-col items-center gap-8 md:flex-row xl:gap-12">
        {navLinkData.map((link) => {
          return (
            <li key={link.id}>
              <Link
                className="text-3xl font-medium hover:text-burnt-orange-200 focus:shadow-[0_0_0_0.5rem_rgba(230,125,34,0.5)] focus:outline-none active:text-burnt-orange-200 md:text-lg"
                href={link.href}
                onClick={handleClick}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        <li>
          <Button1
            href="#call-to-action"
            extraClasses="px-4 py-2 focus:shadow-[0_0_0_0.5rem_rgba(230,125,34,0.5)] focus:outline-none text-3xl md:text-lg"
            onClick={handleClick}
          >
            Try for free
          </Button1>
        </li>
      </ul>
    </nav>
  );
}

// .main-nav {
//   background-color: rgba(255, 255, 255, 0.9);
//   -webkit-backdrop-filter: blur(5px);
//   backdrop-filter: blur(10px);
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   transform: translateX(100%);

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.5s ease-in;

//   /* Hide navigation */
//   /* Allows NO transitions at all */
//   /* display: none; */

//   /* 1) Hide it visually */
//   opacity: 0;

//   /* 2) Make it unaccessible to mouse and keyboard */
//   pointer-events: none;

//   /* 3) Hide it from screen readers */
//   visibility: hidden;
// }

export default Nav;
