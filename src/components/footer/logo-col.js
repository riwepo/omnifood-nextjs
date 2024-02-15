import Image from "next/image";

import SocialLinks from "./social-links";

function LogoCol() {
  const imgScale = 7.4;
  const imgHeight = 163 / imgScale;
  const imgWidth = 1212 / imgScale;

  return (
    <div className="logo-col flex flex-col">
      <a href="#" className="footer-logo mb-8 block">
        <Image
          className="logo"
          height={imgHeight}
          width={imgWidth}
          alt="Omnifood logo"
          src="/img/omnifood-logo.png"
        />
      </a>
      <SocialLinks />
      <p className="copyright mt-auto text-sm leading-normal text-greys-700">
        Copyright &copy; <span className="year">2027</span> by Omnifood, Inc.
        All rights reserved.
      </p>
    </div>
  );
}

export default LogoCol;
