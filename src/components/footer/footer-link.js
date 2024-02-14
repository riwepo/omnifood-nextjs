function FooterLink({ children, href }) {
  return (
    <a
      className="footer-link text-greys-700 h-8 w-8 text-base transition-all duration-300 hover:text-greys-200 active:text-greys-200"
      href={href}
    >
      {children}
    </a>
  );
}

export default FooterLink;
