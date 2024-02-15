import HeadingSecondary from "../ui/heading-secondary";
import Subheading from "../ui/subheading";
import Steps from "./steps";

function HowItWorks() {
  return (
    <section id="how" className="bg-white px-0 py-24">
      <div className="m-auto max-w-[75rem] px-8 py-0">
        <Subheading>How it works</Subheading>
        <HeadingSecondary>
          Your daily dose of health in 3 simple steps
        </HeadingSecondary>
      </div>
      <Steps />
    </section>
  );
}

export default HowItWorks;
