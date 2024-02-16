import HeadingSecondary from "../ui/heading-secondary";
import Form from "./form";
import Picture from "./picture";

function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="section-cta bg-white px-0 pb-32 pt-12"
    >
      <div className="container m-auto max-w-[75rem] px-8 py-0 text-center">
        <div
          className="cta grid grid-cols-1 overflow-hidden rounded-xl
 bg-gradient-to-br from-burnt-orange-400 to-burnt-orange-100 shadow-xl shadow-black/25 md:grid-cols-[3fr_2fr] lg:grid-cols-[2fr_1fr]"
        >
          <div className="cta-text-box pb-16 pl-16 pr-16 pt-12 text-burnt-orange-300">
            <HeadingSecondary extraClasses="text-inherit mb-8">
              Get your first meal for free!
            </HeadingSecondary>
            <p className="cta-text mb-16 text-xl leading-[1.8]">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <Form />
          </div>
          <Picture />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
