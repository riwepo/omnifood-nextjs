import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between h-40 px-16 py-0">
      <Link href="/">
        <Image
          alt="Omnifood logo"
          src="/omnifood-logo.png"
          // image width tio heigh is 7.5
          // we want height 2.2rem
          width={263}
          height={35}
        />
      </Link>

      <nav>
        <ul className="flex items-center gap-20 list-none">
          <li>
            <Link href="/">How it works</Link>
          </li>
          <li>
            <Link href="/">Meals</Link>
          </li>
          <li>
            <Link href="/">Testimonials</Link>
          </li>
          <li>
            <Link href="/">Try for free</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
