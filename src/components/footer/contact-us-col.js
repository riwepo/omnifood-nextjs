import FooterLink from "./footer-link";

function ContactUsCol() {
  return (
    <div className="address-col row-start-2 lg:row-start-1">
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

export default ContactUsCol;
