import Button from "../ui/button";

function Hero() {
  return (
    <section className="bg-off-white pb-6 pl-0 pr-0 pt-12">
      <div className="mx-auto mb-8 grid max-w-[80rem] grid-cols-2 items-center gap-24 px-2">
        <div className="hero-text-box">
          <h1 className="heading-primary text-greys-100 mb-8 text-5xl font-bold tracking-[-0.5px]">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="mb-12 text-xl">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <Button href="#cta" full={true} extraClasses="mr-4">
            Start eating well
          </Button>
          <Button href="#how" full={false}>
            Learn more &darr;
          </Button>

          <div className="delivered-meals">
            <div className="delivered-imgs">
              {/* <img src="img/customers/customer-1.jpg" alt="Customer photo" />
              <img src="img/customers/customer-2.jpg" alt="Customer photo" />
              <img src="img/customers/customer-3.jpg" alt="Customer photo" />
              <img src="img/customers/customer-4.jpg" alt="Customer photo" />
              <img src="img/customers/customer-5.jpg" alt="Customer photo" />
              <img src="img/customers/customer-6.jpg" alt="Customer photo" /> */}
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

// .hero-description {
//   font-size: 2rem;
//   line-height: 1.6;
//   margin-bottom: 4.8rem;
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
