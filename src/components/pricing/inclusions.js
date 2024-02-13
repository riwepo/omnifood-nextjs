import Feature from "./feature";
import InfiniteIcon from "../../../public/icons/features/infinite-outline.svg";
import NutritionIcon from "../../../public/icons/features/nutrition-outline.svg";

function Inclusions() {
  const feature1 = {
    icon: (
      <InfiniteIcon className="infinite-icon h-8 w-8 text-burnt-orange-100" />
    ),
    title: "Never cook again!",
    text: "Our subscriptions cover 365 days per year, even including major holidays.",
  };
  const feature2 = {
    icon: (
      <NutritionIcon className="inutrition-icon h-8 w-8 text-burnt-orange-100" />
    ),
    title: "Local and organic",
    text: "Our cooks only use local, fresh, and organic products to prepare your meals.",
  };
  return (
    <div className="grid--4-cols container mx-auto my-0 mb-12 grid max-w-[75rem] grid-cols-4">
      <Feature featureData={feature1} />
      <Feature featureData={feature2} />
      {/* <div class="feature">
        <ion-icon class="feature-icon" name="infinite-outline"></ion-icon>
        <p class="feature-title">Never cook again!</p>
        <p class="feature-text">
          Our subscriptions cover 365 days per year, even including major
          holidays.
        </p>
      </div>
      <div class="feature">
        <ion-icon class="feature-icon" name="nutrition-outline"></ion-icon>
        <p class="feature-title">Local and organic</p>
        <p class="feature-text">
          Our cooks only use local, fresh, and organic products to prepare your
          meals.
        </p>
      </div>
      <div class="feature">
        <ion-icon class="feature-icon" name="leaf-outline"></ion-icon>
        <p class="feature-title">No waste</p>
        <p class="feature-text">
          All our partners only use reusable containers to package all your
          meals.
        </p>
      </div>
      <div class="feature">
        <ion-icon class="feature-icon" name="pause-outline"></ion-icon>
        <p class="feature-title">Pause anytime</p>
        <p class="feature-text">
          Going on vacation? Just pause your subscription, and we refund unused
          days.
        </p>
      </div> */}
    </div>
  );
}

export default Inclusions;

// .feature-icon {
//     color: #e67e22;
//     height: 3.2rem;
//     width: 3.2rem;
//     background-color: #fdf2e9;
//     margin-bottom: 3.2rem;
//     padding: 1.6rem;
//     border-radius: 50%;
//   }
