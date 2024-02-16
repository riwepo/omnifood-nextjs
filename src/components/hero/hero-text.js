import { Button1, Button2 } from "../ui/buttons";
import DeliveredImages from "./delivered-images";
import HeadingPrimary from "../ui/heading-primary";

function HeroText() {
  return (
    <div className="hero-text-box col-auto text-center lg:text-left">
      <HeadingPrimary>
        A healthy meal delivered to your door, every single day
      </HeadingPrimary>
      <p className="mb-12 text-xl">
        The smart 365-days-per-year food subscription that will make you eat
        healthy again. Tailored to your personal tastes and nutritional needs.
      </p>
      <Button1 href="#call-to-action" extraClasses="mr-4">
        Start eating well
      </Button1>
      <Button2 href="#how">Learn more &darr;</Button2>

      <div className="mt-20 flex items-center justify-center gap-4 lg:justify-start ">
        <DeliveredImages />
        <p className="text-lg font-semibold">
          <span className="font-bold text-burnt-orange-200">250,000+</span>{" "}
          meals delivered last year!
        </p>
      </div>
    </div>
  );
}

export default HeroText;
