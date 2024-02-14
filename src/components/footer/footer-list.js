import FooterLink from "./footer-link";

function FooterList({ footerListData }) {
  return (
    <nav className="nav-col">
      <p className="footer-heading mb-10 text-lg font-medium">
        {footerListData.heading}
      </p>
      <ul className="footer-nav flex list-none flex-col gap-6">
        {footerListData.items.map((item) => {
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

export default FooterList;

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
