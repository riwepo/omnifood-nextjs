function Hero() {
  return (
    <section className="bg-off-white pb-6 pl-0 pr-0 pt-12">
      <div className="mx-auto grid max-w-[80rem] grid-cols-2 items-center gap-24 px-2">
        <div className="hero-text-box">
          <h1 className="heading-primary text-off-black text-5xl font-bold tracking-[-0.5px]">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#cta" className="btn btn--full margin-right-sm">
            Start eating well
          </a>
          <a href="#how" className="btn btn--outline">
            Learn more &darr;
          </a>
          <div class="delivered-meals">
            <div class="delivered-imgs">
              <img src="img/customers/customer-1.jpg" alt="Customer photo" />
              <img src="img/customers/customer-2.jpg" alt="Customer photo" />
              <img src="img/customers/customer-3.jpg" alt="Customer photo" />
              <img src="img/customers/customer-4.jpg" alt="Customer photo" />
              <img src="img/customers/customer-5.jpg" alt="Customer photo" />
              <img src="img/customers/customer-6.jpg" alt="Customer photo" />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>

          <div className="hero-img-box">
            <picture>
              <source srcset="img/hero.webp" type="image/webp" />
              <source srcset="img/hero-min.png" type="image/png" />

              <img
                src="img/hero-min.png"
                className="hero-img"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// .hero {
//   max-width: 130rem;
//   margin: 0 auto;
//   padding: 0 3.2rem;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 9.6rem;
//   align-items: center;
// }

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

// @media (max-width: 59em) {
//   html {
//     /* 8px / 16px = 0.5 = 50% */
//     font-size: 50%;
//   }

//   .hero {
//     grid-template-columns: 1fr;
//     padding: 0 8rem;
//     gap: 6.4rem;
//   }

//   .hero-text-box,
//   .hero-img-box {
//     text-align: center;
//   }
