import Image from "next/image";

import omnifoodLogo from "@/public/img/omnifood-logo.png";

import SocialLinks from "./social-links";

function LogoCol() {
  return (
    <div className="logo-col row-start-2 flex flex-col lg:row-start-1">
      <a href="#" className="footer-logo mb-8 block">
        <Image
          alt="Omnifood logo"
          src={omnifoodLogo}
          className="logo h-[1.375rem] w-auto"
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
