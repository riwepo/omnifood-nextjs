function Feature({ featureData }) {
  return (
    <div class="feature">
      <div className="mb-4 h-16 w-16 rounded-full bg-whites-100 p-4">
        {featureData.icon}
      </div>
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

// .feature-icon {
//     color: #e67e22;
//     height: 3.2rem;
//     width: 3.2rem;
//     background-color: #fdf2e9;
//     margin-bottom: 3.2rem;
//     padding: 1.6rem;
//     border-radius: 50%;
//   }

//   .feature-title {
//     font-size: 2.4rem;
//     color: #333;
//     font-weight: 700;
//     margin-bottom: 1.6rem;
//   }

//   .feature-text {
//     font-size: 1.8rem;
//     line-height: 1.8;
//   }
