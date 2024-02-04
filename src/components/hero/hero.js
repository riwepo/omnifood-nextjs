import Button from "../ui/button";
import DeliveredImages from "./delivered-images";

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

          <div className="mt-20 flex items-center gap-4">
            {/* <div className="flex">
              {/* <img src="img/customers/customer-1.jpg" alt="Customer photo" />
              <img src="img/customers/customer-2.jpg" alt="Customer photo" />
              <img src="img/customers/customer-3.jpg" alt="Customer photo" />
              <img src="img/customers/customer-4.jpg" alt="Customer photo" />
              <img src="img/customers/customer-5.jpg" alt="Customer photo" />
              <img src="img/customers/customer-6.jpg" alt="Customer photo" /> 
            </div> */}
            <DeliveredImages />
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

// .delivered-meals {
//   display: flex;
//   align-items: center;
//   gap: 1.6rem;
//   margin-top: 8rem;
// }

// .delivered-imgs {
//   display: flex;
// }

// .delivered-imgs img {
//   height: 4.8rem;
//   width: 4.8rem;
//   border-radius: 50%;
//   margin-right: -1.6rem;
//   border: 3px solid #fdf2e9;
// }

// .delivered-imgs img:last-child {
//   margin: 0;
// }

// .delivered-text {
//   font-size: 1.8rem;
//   font-weight: 600;
// }

// .delivered-text span {
//   color: #cf711f;
//   font-weight: 700;
// }
