import Button from "../ui/button";
import DeliveredImages from "./delivered-images";

function Featured() {
  return (
    <section className="bg-transparent pb-2 pl-0 pr-0 pt-3">
      <div className="mx-auto my-0 max-w-[75rem] px-8 py-0">
        <h2 className="text-greys-300 mb-6 text-center text-sm font-medium uppercase tracking-widest">
          As featured in
        </h2>
        <div className="hero-text-box col-auto">
          <h1 className="heading-primary mb-8 text-5xl font-bold tracking-[-0.5px] text-greys-100">
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
            <DeliveredImages />
            <p className="text-lg font-semibold">
              <span className="font-bold text-burnt-orange-200">250,000+</span>{" "}
              meals delivered last year!
            </p>
          </div>
        </div>

        <div className="col-auto text-center">
          <picture>
            <source srcSet="img/hero.webp" type="image/webp" />
            <source srcSet="img/hero-min.png" type="image/png" />

            <img
              src="img/hero-min.png"
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Featured;

// .heading-featured-in {
//   font-size: 1.4rem;
//   text-transform: uppercase;
//   letter-spacing: 0.75px;
//   font-weight: 500;
//   text-align: center;
//   margin-bottom: 2.4rem;
//   color: #888;
// }
