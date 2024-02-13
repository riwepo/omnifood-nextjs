import PlanItem from "./planItem";
import Button from "../ui/button";

function Plan({ planData }) {
  let customClasses = "";
  if (planData.name === "Starter") {
    customClasses = "justify-self-end border-2 border-whites-100";
  } else if (planData.name === "Complete") {
    customClasses = `
    bg-whites-100
    relative
    overflow-hidden
    after:absolute
    after:right-[-18%]
    after:top-[6%]
    after:rotate-45
    after:bg-tags-paleo
    after:px-[5rem]
    after:py-[0.5rem]
    after:text-sm
    after:font-bold
    after:uppercase
    after:text-greys-100
    after:content-["Best_Value"]`;
  }

  //   background-color: #fdf2e9;
  //   padding: 4.8rem;
  //   position: relative;
  //   overflow: hidden;
  // }

  // .pricing-plan--complete::after {
  //   content: "Best value";
  //   position: absolute;
  //   top: 6%;
  //   right: -18%;
  //   text-transform: uppercase;
  //   font-size: 1.4rem;
  //   font-weight: 700;
  //   color: #333;
  //   background-color: #ffd43b;
  //   padding: 0.8rem 8rem;
  //   transform: rotate(45deg);

  return (
    <div
      className={`
      pricing-plan
      pricing-plan--starter
      w-3/4
      rounded-xl
      p-12
      ${customClasses}`}
    >
      <header className="plan-header mb-12 text-center">
        <p className="plan-name mb-8 text-xl font-semibold uppercase tracking-[0.75px] text-burnt-orange-200">
          {planData.name}
        </p>
        <p className="plan-price mb-4 text-6xl font-semibold text-greys-100">
          <span>$</span>
          {planData.price}
        </p>
        <p className="plan-text text-base leading-relaxed text-greys-500">
          {planData.description}
        </p>
      </header>
      <ul className="list flex list-none flex-col gap-4">
        {planData.items.map((itemData) => {
          return (
            <PlanItem
              key={itemData.index}
              isChecked={itemData.isChecked}
              markup={itemData.markup}
            />
          );
        })}
      </ul>
      <div className="plan-sign-up mt-12 text-center">
        <Button href="#" full={true}>
          Start eating well
        </Button>
      </div>
    </div>
  );
}

export default Plan;

// .pricing-plan {
//   border-radius: 11px;

//   width: 75%;
// }

// .pricing-plan--starter {
//   justify-self: end;
//   border: 2px solid #fdf2e9;
//   padding: 4.6rem;
// }

// .plan-header {
//   text-align: center;
//   margin-bottom: 4.8rem;
// }

// .plan-name {
//   color: #cf711f;
//   font-weight: 600;
//   font-size: 2rem;
//   text-transform: uppercase;
//   letter-spacing: 0.75;
//   margin-bottom: 3.2rem;
// }

// .plan-price {
//   font-size: 6.2rem;
//   font-weight: 600;
//   color: #333;
//   margin-bottom: 1.6rem;
// }

// .plan-price span {
//   font-size: 3rem;
//   font-weight: 500;
//   margin-right: 0.8rem;
// }

// .plan-text {
//   font-size: 1.6rem;
//   line-height: 1.6;
//   color: #6f6f6f;
// }

// .plan-sing-up {
//   text-align: center;
//   margin-top: 4.8rem;
// }

// .plan-details {
//   font-size: 1.6rem;
//   line-height: 1.6;
//   text-align: center;
// }

// .list {
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   gap: 1.6rem;
// }

// .pricing-plan--starter {
//   justify-self: end;
//   border: 2px solid #fdf2e9;
//   padding: 4.6rem;
// }

// .pricing-plan--complete {
//   background-color: #fdf2e9;
//   padding: 4.8rem;
//   position: relative;
//   overflow: hidden;
// }

// .pricing-plan--complete::after {
//   content: "Best value";
//   position: absolute;
//   top: 6%;
//   right: -18%;

//   text-transform: uppercase;
//   font-size: 1.4rem;
//   font-weight: 700;
//   color: #333;
//   background-color: #ffd43b;
//   padding: 0.8rem 8rem;
//   transform: rotate(45deg);
// }
