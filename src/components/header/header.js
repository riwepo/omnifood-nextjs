import Link from "next/link";
import Image from "next/image";

function StyledNavLink({ children, href }) {
  return (
    <Link
      className="text-lg font-medium hover:text-burnt-orange active:text-burnt-orange"
      href={href}
    >
      {children}
    </Link>
  );
}

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
            <StyledNavLink href="#how">How it works</StyledNavLink>
          </li>
          <li>
            <StyledNavLink href="#meals">Meals</StyledNavLink>
          </li>
          <li>
            <StyledNavLink href="#testimonials">Testimonials</StyledNavLink>
          </li>
          <li>
            <StyledNavLink href="#pricing">Try it for free</StyledNavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
