function Inclusions() {
  return (
    <div className="grid--4-cols container mx-auto my-0 mb-12 grid max-w-[75rem] grid-cols-4">
      <div class="feature">
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
      </div>
    </div>
  );
}

export default Inclusions;
