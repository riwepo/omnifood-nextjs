import ContactUsCol from "./contact-us-col";
import LogoCol from "./logo-col";
import MiscCol from "./misc-col";

function Footer() {
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
      <div className="_grid grid--footer container mx-auto my-0 grid max-w-[75rem] grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-x-12 gap-y-12 px-8 py-0 md:gap-y-16 lg:grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] xl:gap-x-24">
        <LogoCol />

        <ContactUsCol />

        <MiscCol colData={accountData} />
        <MiscCol colData={companyData} />
        <MiscCol colData={resourcesData} />
      </div>
    </footer>
  );
}

export default Footer;
