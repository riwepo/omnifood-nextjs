import Step from "../how-it-works/step";
import HeadingSecondary from "../ui/heading-secondary";
import Subheading from "../ui/subheading";

const step1 = {
  number: "01",
  index: 0,
  imgSrc: "/img/step/app-screen-1.png",
  imgAlt: "iPhone app preferences selection screen",
  summary: "Tell us what you like (and what not)",
  description: `Never again waste time thinking about what to eat! 
     Omnifood AI will create a 100% personalized weekly meal plan just for you.
     It makes  sure you get all the nutrients and vitamins you need, no matter what diet you follow!`,
};
const step2 = {
  number: "02",
  index: 1,
  imgSrc: "/img/step/app-screen-2.png",
  imgAlt: "iPhone app meal approving plan screen",
  summary: "Approve your weekly meal plan",
  description: `Once per week, approve the meal plan generated for you by Omnifood
  AI. You can change ingredients, swap entire meals, or even add
  your own recipes.`,
};
const step3 = {
  number: "03",
  index: 2,
  imgSrc: "/img/step/app-screen-3.png",
  imgAlt: "iPhone app delivery screen",
  summary: "Receive meals at convenient time",
  description: `Best chefs in town will cook your selected meal every day, and we
  will deliver it to your door whenever works best for you. You can
  change delivery schedule and address daily!`,
};

function HowItWorks() {
  return (
    <section id="how" className="bg-white px-0 py-24">
      <div className="m-auto max-w-[75rem] px-8 py-0">
        <Subheading>How it works</Subheading>
        <HeadingSecondary>
          Your daily dose of health in 3 simple steps
        </HeadingSecondary>
      </div>

      <div className="m-auto grid max-w-[75rem] grid-cols-2 items-center gap-y-[6rem] px-8 py-0">
        <Step stepData={step1} />
        <Step stepData={step2} />
        <Step stepData={step3} />
      </div>
    </section>
  );
}

export default HowItWorks;
