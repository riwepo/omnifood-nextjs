import HeadingSecondary from "../ui/heading-secondary";
import Subheading from "../ui/subheading";
import Plans from "../pricing/plans";
import Inclusions from "./inclusions";
import Disclaimer from "./disclaimer";

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
      <Disclaimer />

      <Inclusions />
    </section>
  );
}

export default Pricing;
