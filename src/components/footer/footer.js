import Image from "next/image";

import SocialLinks from "./social-links";
import ContactUs from "./contact-us";
import FooterList from "./footer-list";

function Footer() {
  const imgScale = 7.4;
  const imgHeight = 163 / imgScale;
  const imgWidth = 1212 / imgScale;

  const accountData = {
    heading: "Account",
    items: [
      { id: 1, text: "Create account" },
      { id: 2, text: "Sign in" },
      { id: 3, text: "iOS app" },
      { id: 4, text: "Android app" },
    ],
  };
  const companyData = {
    heading: "Company",
    items: [
      { id: 1, text: "About Omnifood" },
      { id: 2, text: "For Business" },
      { id: 3, text: "Cooking partners" },
      { id: 4, text: "Careers" },
    ],
  };
  const resourcesData = {
    heading: "Resources",
    items: [
      { id: 1, text: "Recipe directory" },
      { id: 2, text: "Help center" },
      { id: 3, text: "Privacy & terms" },
    ],
  };

  return (
    <footer className="footer border-t-[1px] border-greys-600 bg-white px-0 py-32">
      <div className="grid--footer container mx-auto my-0 grid max-w-[7rem] grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] px-8 py-0">
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
            Copyright &copy; <span className="year">2027</span> by Omnifood,
            Inc. All rights reserved.
          </p>
        </div>

        <ContactUs />

        <FooterList footerListData={accountData} />
        <FooterList footerListData={companyData} />
        <FooterList footerListData={resourcesData} />
      </div>
    </footer>
  );
}

export default Footer;

// .logo {
//   height: 2.2rem;
// }

// .container {
//   /* 1140px */
//   max-width: 120rem;
//   padding: 0 3.2rem;
//   margin: 0 auto;
// }

// .footer {
//   padding: 12.8rem 0;
//   border-top: 1px solid #eee;
// }

// .grid--footer {
//   grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;
// }

// .logo-col {
//   display: flex;
//   flex-direction: column;
// }

// .footer-logo {
//   display: block;
//   margin-bottom: 3.2rem;
// }

// .social-links {
//   list-style: none;
//   display: flex;
//   gap: 2.4rem;
// }

// .social-icon {
//   height: 2.4rem;
//   width: 2.4rem;
// }

// .copyright {
//   font-size: 1.4rem;
//   line-height: 1.6;
//   color: #767676;
//   margin-top: auto;
// }

// .footer-heading {
//   font-size: 1.8rem;
//   font-weight: 500;
//   margin-bottom: 4rem;
// }

// .contacts {
//   font-style: normal;
//   font-size: 1.6rem;
//   line-height: 1.6;
// }

// .address {
//   margin-bottom: 2.4rem;
// }

// .footer-nav {
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   gap: 2.4rem;
// }

// .footer-link:link,
// .footer-link:visited {
//   text-decoration: none;
//   font-size: 1.6rem;
//   color: #767676;
//   transition: all 0.3s;
// }

// .footer-link:hover,
// .footer-link:active {
//   color: #555;
// }
