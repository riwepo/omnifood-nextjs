import Step from "../how-it-works/step";

const step1 = {
  imgSrc: "/img/step/app-screen-1.png",
  imgAlt: "iPhone app preferences selection screen",
  summary: "Tell us what you like (and what not)",
  description: `Never again waste time thinking about what to eat! 
     Omnifood AI will create a 100% personalized weekly meal plan just for you.
     It makes  sure you get all the nutrients and vitamins you need, no matter what diet you follow!`,
};

function HowItWorks() {
  return (
    <section id="how" className="px-0 py-24">
      <div className="m-auto max-w-[75rem] px-8 py-0">
        <span className="mb-4 block text-base font-medium uppercase tracking-[0.75px] text-burnt-orange-200">
          How it works
        </span>
        <h2 className="mb-[6rem] text-5xl font-bold leading-tight tracking-[0.5px] text-greys-100">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <Step stepData={step1} />
    </section>
  );
}

export default HowItWorks;

// .section-how {
//   padding: 9.6rem 0;
// }

// .container {
//   /* 1140px */
//   max-width: 120rem;
//   padding: 0 3.2rem;
//   margin: 0 auto;
// }

// .subheading {
//   display: block;
//   font-size: 1.6rem;
//   font-weight: 500;
//   color: #cf711f;
//   text-transform: uppercase;
//   margin-bottom: 1.6rem;
//   letter-spacing: 0.75px;
// }

// .heading-secondary {
//   font-size: 4.4rem;
//   line-height: 1.2;
//   margin-bottom: 9.6rem;
// }
