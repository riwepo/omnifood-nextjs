import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between h-24 px-10 py-0">
      <Link href="/">
        <Image
          alt="Omnifood logo"
          src="/omnifood-logo.png"
          // image width to heigh is 7.5
          // we want height 2.2rem
          width={165}
          height={22}
        />
      </Link>

      <nav>
        <ul className="flex items-center gap-12 list-none">
          <li>
            <Link className="text-lg font-medium" href="/">
              How it works
            </Link>
          </li>
          <li>
            <Link className="text-lg font-medium" href="/">
              Meals
            </Link>
          </li>
          <li>
            <Link className="text-lg font-medium" href="/">
              Testimonials
            </Link>
          </li>
          <li>
            <Link className="text-lg font-medium" href="/">
              Try for free
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
