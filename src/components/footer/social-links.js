import InstagramLogo from "../../../public/icons/social/logo-instagram.svg";

function SocialLinks() {
  return (
    <ul className="social-links flex list-none gap-6">
      <li>
        <a className="footer-link" href="#">
          <InstagramLogo
            className="social-icon h-8 w-8"
            name="logo-instagram"
          />
          <ion-icon className="social-icon" name="logo-instagram"></ion-icon>
        </a>
      </li>
      <li>
        <a className="footer-link" href="#">
          <ion-icon className="social-icon" name="logo-facebook"></ion-icon>
        </a>
      </li>
      <li>
        <a className="footer-link" href="#">
          <ion-icon className="social-icon" name="logo-twitter"></ion-icon>
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

export default SocialLinks;
