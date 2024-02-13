function Plan() {
  return (
    <div className="pricing-plan pricing-plan--starter w-3/4 justify-self-end rounded-xl border-2 border-whites-100  p-12">
      <header class="plan-header">
        <p class="plan-name">Starter</p>
        <p class="plan-price">
          <span>$</span>399
        </p>
        <p class="plan-text">per month. That's just $13 per meal!</p>
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
