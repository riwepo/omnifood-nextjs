import Plan from "./plan";

function Plans() {
  const plan1Data = {
    name: "Starter",
    price: "399",
    description: "per month. That's just $13 per meal!",
    items: [
      { key: 1, isChecked: true, markup: <span>1 meal per day</span> },
      {
        key: 2,
        isChecked: true,
        markup: <span>Order from 11am to 9pm</span>,
      },
      { key: 3, isChecked: true, markup: <span>Delivery is free</span> },
      { key: 4, isChecked: false, markup: "" },
    ],
  };
  const plan2Data = {
    name: "Complete",
    price: "649",
    description: "per month. That's just $11 per meal!",
    items: [
      {
        key: 1,
        isChecked: true,
        markup: (
          <span>
            <strong>2 meals</strong> per day
          </span>
        ),
      },
      {
        key: 2,
        isChecked: true,
        markup: (
          <span>
            Order <strong>24/7</strong>
          </span>
        ),
      },
      { key: 3, isChecked: true, markup: <span>Delivery is free</span> },
      {
        key: 4,
        isChecked: true,
        markup: <span>Get access to latest recipes</span>,
      },
    ],
  };

  return (
    <div className="_grid container mx-auto my-0 mb-12 grid max-w-[75rem] grid-cols-2 gap-x-12 gap-x-16 gap-y-12 px-8 py-0 md:gap-y-16 xl:gap-x-24">
      <Plan planData={plan1Data} />
      <Plan planData={plan2Data} />
    </div>
  );
}

export default Plans;
