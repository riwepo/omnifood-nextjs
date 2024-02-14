import FooterLink from "./footer-link";

function ContactUs() {
  return (
    <div className="address-col">
      <p className="footer-heading mb-10 text-lg font-medium">Contact us</p>
      <address className="contacts text-base leading-relaxed">
        <p className="address mb-6  text-greys-200">
          623 Harrison St., 2nd Floor, San Francisco, CA 94107
        </p>
        <p>
          <FooterLink href="tel:415-201-6370">415-201-6370</FooterLink>
          <br />
          <FooterLink href="mailto:hello@omnifood.com">
            hello@omnifood.com
          </FooterLink>
        </p>
      </address>
    </div>
  );
}

export default ContactUs;

// .footer-nav {
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   gap: 2.4rem;
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
