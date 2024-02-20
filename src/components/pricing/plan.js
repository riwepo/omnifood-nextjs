import PlanItem from "./plan-item";
import { Button1 } from "../ui/buttons";

function Plan({ planData }) {
  let customClasses = "";
  if (planData.name === "Starter") {
    customClasses = "border-2 border-whites-100";
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

  return (
    <div
      className={`
      pricing-plan
      pricing-plan--starter
      mx-auto
      max-w-[38rem]
      self-center
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
              key={itemData.key}
              isChecked={itemData.isChecked}
              markup={itemData.markup}
            />
          );
        })}
      </ul>
      <div className="plan-sign-up mt-12 text-center">
        <Button1 href="#">Start eating well</Button1>
      </div>
    </div>
  );
}

export default Plan;
