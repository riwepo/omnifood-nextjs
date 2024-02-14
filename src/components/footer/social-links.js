import InstagramLogo from "../../../public/icons/social/logo-instagram.svg";
import FacebookLogo from "../../../public/icons/social/logo-facebook.svg";
import TwitterLogo from "../../../public/icons/social/logo-twitter.svg";

function SocialLinks() {
  return (
    <ul className="social-links flex list-none gap-6">
      <li>
        <a className="footer-link" href="#">
          <InstagramLogo
            className="social-icon text-greys-700 h-8 w-8 text-base transition-all duration-300 hover:text-greys-200 active:text-greys-200"
            name="logo-instagram"
          />
        </a>
      </li>
      <li>
        <a className="footer-link" href="#">
          <FacebookLogo
            className="social-icon text-greys-700 h-8 w-8 text-base transition-all duration-300 hover:text-greys-200 active:text-greys-200"
            name="logo-facebook"
          />
        </a>
      </li>
      <li>
        <a className="footer-link" href="#">
          <TwitterLogo
            className="social-icon text-greys-700 h-8 w-8 text-base transition-all duration-300 hover:text-greys-200 active:text-greys-200"
            name="logo-twitter"
          />
        </a>
      </li>
    </ul>
  );
}

// .social-links {
//   list-style: none;
//   display: flex;
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

export default SocialLinks;
