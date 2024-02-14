import Image from "next/image";
import SocialLinks from "./social-links";
import ContactUs from "./contact-us";

function Footer() {
  const imgScale = 7.4;
  const imgHeight = 163 / imgScale;
  const imgWidth = 1212 / imgScale;

  return (
    <footer className="footer border-greys-600 border-t-[px] px-0 py-32">
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
          <p className="copyright text-greys-700 mt-auto text-sm leading-normal">
            Copyright &copy; <span className="year">2027</span> by Omnifood,
            Inc. All rights reserved.
          </p>
        </div>

        <ContactUs />

        {/* <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <a className="footer-link" href="mailto:hello@omnifood.com">
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div> */}

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Create account
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                About Omnifood
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Recipe directory{" "}
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
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
