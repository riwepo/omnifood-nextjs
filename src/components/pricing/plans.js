import Plan from "./plan";

function Plans() {
  const plan1Data = {
    name: "Starter",
    price: "399",
    description: "per month. That's just $13 per meal!",
    items: [
      { index: 0, isChecked: true, markup: <span>1 meal per day</span> },
      {
        index: 1,
        isChecked: true,
        markup: <span>Order from 11am to 9pm</span>,
      },
      { index: 2, isChecked: true, markup: <span>Delivery is free</span> },
      { index: 3, isChecked: false, markup: "" },
    ],
  };
  const plan2Data = {
    name: "Complete",
    price: "649",
    description: "per month. That's just $11 per meal!",
    items: [
      {
        index: 0,
        isChecked: true,
        markup: (
          <span>
            <strong>2 meals</strong> per day
          </span>
        ),
      },
      {
        index: 1,
        isChecked: true,
        markup: (
          <span>
            Order <strong>24/7</strong>
          </span>
        ),
      },
      { index: 2, isChecked: true, markup: <span>Delivery is free</span> },
      {
        index: 3,
        isChecked: true,
        markup: <span>Get access to latest recipes</span>,
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto my-0 mb-12 grid max-w-[75rem] grid-cols-2 gap-x-16 gap-y-24 px-8 py-0">
        <Plan planData={plan1Data} />
        <Plan planData={plan2Data} />
      </div>

      <div className="container mx-auto my-0 grid max-w-[75rem] px-8 py-0">
        <aside className="plan-details text-center text-base leading-normal">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>
    </>
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

// .plan-details {
//   font-size: 1.6rem;
//   line-height: 1.6;
//   text-align: center;
// }

export default Plans;
