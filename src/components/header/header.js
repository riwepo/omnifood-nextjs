import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between h-40 px-16 py-0">
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

        <Link href="/">How it works</Link>
        <Link href="/">Meals</Link>
        <Link href="/">Testimonials</Link>
        <Link href="/">Try for free</Link>
      </nav>
    </header>
  );
}

export default Header;
