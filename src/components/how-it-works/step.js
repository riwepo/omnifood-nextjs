function Step() {
  return (
    <div className="m-auto grid max-w-[75rem] grid-cols-2 items-center px-8 py-0">
      <div>
        <p className="text-greys-400 mb-4 text-[5.4rem] font-semibold">01</p>
        <h3 className="heading-tertiary mb-8 text-3xl font-bold leading-tight tracking-[0.5px] text-greys-100">
          Tell us what you like (and what not)
        </h3>
        <p className="step-description">
          Never again waste time thinking about what to eat! Omnifood AI will
          create a 100% personalized weekly meal plan just for you. It makes
          sure you get all the nutrients and vitamins you need, no matter what
          diet you follow!
        </p>
      </div>

      <div className="step-img-box">
        <img
          src="img/app/app-screen-1.png"
          class="step-img"
          alt="iPhone app
          preferences selection screen"
        />
      </div>
    </div>
  );
}

export default Step;

// .step-number {
//     font-size: 8.6rem;
//     font-weight: 600;
//     color: #ddd;
//     margin-bottom: 1.2rem;
//   }

// .heading-primary,
// .heading-secondary,
// .heading-tertiary {
//   font-weight: 700;
//   color: #333;
//   /* color: #45260a; */
//   /* color: #343a40; */
//   letter-spacing: -0.5px;
// }

// .heading-primary {
//   font-size: 5.2rem;
//   line-height: 1.05;
//   margin-bottom: 3.2rem;
// }

// .heading-secondary {
//   font-size: 4.4rem;
//   line-height: 1.2;
//   margin-bottom: 9.6rem;
// }

// .heading-tertiary {
//   font-size: 3rem;
//   line-height: 1.2;
//   margin-bottom: 3.2rem;
// }
