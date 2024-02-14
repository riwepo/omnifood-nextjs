import Link from "next/link";
import Image from "next/image";

import Nav from "./Nav";

function Header() {
  const imgScale = 0.135;
  const imgWidth = 1212 * imgScale;
  const imgHeight = 163 * imgScale;
  return (
    <header className="relative flex h-24 items-center justify-between bg-whites-100 px-10 py-0">
      <Link href="/">
        <Image
          alt="Omnifood logo"
          src="/img/omnifood-logo.png"
          width={imgWidth}
          height={imgHeight}
        />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
