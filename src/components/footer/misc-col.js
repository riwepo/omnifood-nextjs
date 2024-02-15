import FooterLink from "./footer-link";

function MiscCol({ colData }) {
  return (
    <nav className="nav-col">
      <p className="footer-heading mb-10 text-lg font-medium">
        {colData.heading}
      </p>
      <ul className="footer-nav flex list-none flex-col gap-6">
        {colData.items.map((item) => {
          return (
            <li key={item.id}>
              <FooterLink href="#">{item.text}</FooterLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MiscCol;
