import Picture from "./picture";
import TextBox from "./text-box";

function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="section-cta bg-white px-0 pb-32 pt-12"
    >
      <div className="container m-auto max-w-[75rem] px-8 py-0 text-center">
        <div
          className="cta grid grid-cols-1 grid-rows-2 overflow-hidden rounded-xl
 bg-gradient-to-br from-burnt-orange-400 to-burnt-orange-100 shadow-xl shadow-black/25 md:grid-cols-[3fr_2fr] md:grid-rows-1 lg:grid-cols-[2fr_1fr]"
        >
          <TextBox />
          <Picture />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
