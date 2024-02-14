import { Button1, Button2 } from "../ui/buttons";
import DeliveredImages from "./delivered-images";
import HeadingPrimary from "../ui/heading-primary";

function Hero() {
  return (
    <section className="bg-whites-100 pb-6 pl-0 pr-0 pt-12">
      <div className="mx-auto mb-8 grid max-w-[80rem] grid-cols-2 items-center gap-24 px-2">
        <div className="hero-text-box col-auto">
          <HeadingPrimary>
            A healthy meal delivered to your door, every single day
          </HeadingPrimary>
          <p className="mb-12 text-xl">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <Button1 href="#cta" extraClasses="mr-4">
            Start eating well
          </Button1>
          <Button2 href="#how">Learn more &darr;</Button2>

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

export default Hero;
