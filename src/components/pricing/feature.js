function Feature({ featureData }) {
  return (
    <div class="feature">
      {featureData.icon}
      <ion-icon class="feature-icon" name="infinite-outline"></ion-icon>

      <p class="feature-title">{featureData.title}</p>
      <p class="feature-title">Never cook again!</p>
      <p class="feature-text">{featureData.text}</p>
      <p class="feature-text">
        Our subscriptions cover 365 days per year, even including major
        holidays.
      </p>
    </div>
  );
}

export default Feature;
