import Step from "./step";

import step1Img from "@/public/img/step/app-screen-1.png";
import step2Img from "@/public/img/step/app-screen-2.png";
import step3Img from "@/public/img/step/app-screen-3.png";

const stepData = [
  {
    key: 1,
    number: "01",
    img: step1Img,
    imgAlt: "iPhone app preferences selection screen",
    summary: "Tell us what you like (and what not)",
    description: `Never again waste time thinking about what to eat! 
     Omnifood AI will create a 100% personalized weekly meal plan just for you.
     It makes  sure you get all the nutrients and vitamins you need, no matter what diet you follow!`,
  },
  {
    key: 2,
    number: "02",
    img: step2Img,
    imgAlt: "iPhone app meal approving plan screen",
    summary: "Approve your weekly meal plan",
    description: `Once per week, approve the meal plan generated for you by Omnifood
  AI. You can change ingredients, swap entire meals, or even add
  your own recipes.`,
  },
  {
    key: 3,
    number: "03",
    img: step3Img,
    imgAlt: "iPhone app delivery screen",
    summary: "Receive meals at convenient time",
    description: `Best chefs in town will cook your selected meal every day, and we
  will deliver it to your door whenever works best for you. You can
  change delivery schedule and address daily!`,
  },
];

function Steps() {
  return (
    <div className="_grid m-auto grid max-w-[75rem] grid-cols-1 items-center gap-x-12 gap-y-12 px-8 py-0 md:grid-cols-2 md:gap-y-16 xl:gap-x-24">
      {stepData.map((step) => {
        return <Step key={step.key} stepData={step} />;
      })}
    </div>
  );
}

export default Steps;
