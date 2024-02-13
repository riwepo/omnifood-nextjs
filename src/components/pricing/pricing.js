import HeadingSecondary from "../ui/heading-secondary";
import Subheading from "../ui/subheading";
import Plans from "../pricing/plans";
import Inclusions from "./inclusions";

function Pricing() {
  return (
    <section id="pricing" className="section-pricing bg-white px-0 py-24">
      <div className="container m-auto max-w-[75rem] px-8 py-0 text-center">
        <Subheading>Pricing</Subheading>
        <HeadingSecondary>
          Eating well without breaking the bank
        </HeadingSecondary>
      </div>
      <Plans />
      <div className="container mx-auto my-0 grid max-w-[75rem] px-8 py-0">
        <aside className="plan-details text-center text-base leading-normal">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>
      <Inclusions />
    </section>
  );
}

// .container {
//   /* 1140px */
//   max-width: 120rem;
//   padding: 0 3.2rem;
//   margin: 0 auto;
// }

// .all-recipes {
//   text-align: center;
//   font-size: 1.8rem;
// }

// .link:link,
// .link:visited {
//   display: inline-block;
//   color: #e67e22;
//   text-decoration: none;
//   border-bottom: 1px solid currentColor;
//   padding-bottom: 2px;
//   transition: all 0.3s;
// }

// .link:hover,
// .link:active {
//   color: #cf711f;
//   border-bottom: 1px solid transparent;
// }

export default Pricing;
