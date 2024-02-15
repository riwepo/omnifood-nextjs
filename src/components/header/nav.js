import Link from "next/link";

import { Button1 } from "../ui/buttons";

function Nav() {
  const navLinkData = [
    { id: 1, href: "#how", name: "How it works" },
    { id: 2, href: "#meals", name: "Meals" },
    { id: 3, href: "#testimonials", name: "Testimonials" },
    { id: 4, href: "#pricing", name: "Pricing" },
  ];
  return (
    <nav>
      <ul className="flex list-none items-center gap-12">
        {navLinkData.map((link) => {
          return (
            <li key={link.id}>
              <Link
                className="text-lg font-medium hover:text-burnt-orange-200 focus:shadow-[0_0_0_0.5rem_rgba(230,125,34,0.5)] focus:outline-none active:text-burnt-orange-200"
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        <li>
          <Button1
            href="#call-to-action"
            extraClasses="px-4 py-2 text-lg focus:shadow-[0_0_0_0.5rem_rgba(230,125,34,0.5)] focus:outline-none"
          >
            Try for free
          </Button1>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
