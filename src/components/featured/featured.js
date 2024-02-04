import Button from "../ui/button";
import FeaturedLogos from "./featured-logos";
import DeliveredImages from "./featured-logos";

function Featured() {
  return (
    <section className="bg-transparent pb-2 pl-0 pr-0 pt-3">
      <div className="mx-auto my-0 max-w-[75rem] px-8 py-0">
        <h2 className="text-greys-300 mb-6 text-center text-sm font-medium uppercase tracking-widest">
          As featured in
        </h2>
        <FeaturedLogos />
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
