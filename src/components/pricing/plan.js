function Plan() {
  return (
    <div className="pricing-plan pricing-plan--starter w-3/4 justify-self-end rounded-xl border-2 border-whites-100  p-12">
      <header className="plan-header mb-12 text-center">
        <p className="plan-name mb-8 text-xl font-semibold uppercase tracking-[0.75px] text-burnt-orange-200">
          Starter
        </p>
        <p className="plan-price mb-4 text-6xl font-semibold text-greys-100">
          <span>$</span>399
        </p>
        <p className="plan-text text-base leading-relaxed text-greys-500">
          per month. That's just $13 per meal!
        </p>
      </header>
      <ul class="list">
        <li class="list-item">
          <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
          <span>1 meal per day</span>
        </li>
        <li class="list-item">
          <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
          <span>Order from 11am to 9pm</span>
        </li>
        <li class="list-item">
          <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
          <span>Delivery is free</span>
        </li>
        <li class="list-item">
          <ion-icon class="list-icon" name="close-outline"></ion-icon>
        </li>
      </ul>
      <div class="plan-sing-up">
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
