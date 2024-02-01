import Link from "next/link";
import Image from "next/image";

function StyledNavLink({ children, href }) {
  return (
    <Link
      className="text-lg font-medium hover:text-burnt-orange-200 active:text-burnt-orange-200"
      href={href}
    >
      {children}
    </Link>
  );
}
function ButtonNavLink({ children, href }) {
  return (
    <Link
      className="px-6 py-3 text-lg font-medium text-white rounded-lg hover:bg-burnt-orange-200 active:bg-burnt-orange-200 bg-burnt-orange-100"
      href={href}
    >
      {children}
    </Link>
  );
}

// padding: 1.2rem 2.4rem;
//   border-radius: 9px;
//   color: #fff;
//   background-color: #e67e22;

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
            <StyledNavLink href="#testimonials">Pricing</StyledNavLink>
          </li>
          <li>
            <ButtonNavLink href="#pricing">Try for free</ButtonNavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
