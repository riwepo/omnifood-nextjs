import Feature from "./feature";

function Plan({ planData }) {
  return (
    <div className="pricing-plan pricing-plan--starter w-3/4 justify-self-end rounded-xl border-2 border-whites-100  p-12">
      <header className="plan-header mb-12 text-center">
        <p className="plan-name mb-8 text-xl font-semibold uppercase tracking-[0.75px] text-burnt-orange-200">
          {planData.name}
        </p>
        <p className="plan-price mb-4 text-6xl font-semibold text-greys-100">
          <span>$</span>
          {planData.price}
        </p>
        <p className="plan-text text-base leading-relaxed text-greys-500">
          {planData.dedcription}
        </p>
      </header>
      <ul className="list flex list-none flex-col gap-4">
        {planData.features.map((feature) => {
          return (
            <Feature
              key={feature.index}
              isChecked={feature.isChecked}
              markup={feature.markup}
            />
          );
        })}
      </ul>
      <div className="plan-sing-up">
        <a href="#" class="btn btn--full">
          Start eating well
        </a>
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
