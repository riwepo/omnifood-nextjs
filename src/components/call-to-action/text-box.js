import HeadingSecondary from "../ui/heading-secondary";
import Form from "./form";

function TextBox() {
  return (
    <div
      className="cta-text-box row-start-2 p-8 text-burnt-orange-300
 md:row-start-1 md:pb-16 md:pl-16 md:pr-16 md:pt-12"
    >
      <HeadingSecondary extraClasses="text-inherit mb-8">
        Get your first meal for free!
      </HeadingSecondary>
      <p className="cta-text mb-16 text-xl leading-[1.8]">
        Healthy, tasty and hassle-free meals are waiting for you. Start eating
        well today. You can cancel or pause anytime. And the first meal is on
        us!
      </p>
      <Form />
    </div>
  );
}

export default TextBox;
