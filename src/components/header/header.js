import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between h-40 px-16 py-0">
        <Link href="/">
          <Image
            class="logo"
            alt="Omnifood logo"
            src="/omnifood-logo.png"
            width={50}
            height={50}
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
