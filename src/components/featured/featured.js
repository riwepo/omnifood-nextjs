import FeaturedLogos from "./featured-logos";

function Featured() {
  return (
    <section className="bg-white pb-2 pl-0 pr-0 pt-3">
      <div className="mx-auto my-0 max-w-[75rem] px-8 py-0">
        <h2 className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-greys-300">
          As featured in
        </h2>
        <FeaturedLogos />
      </div>
    </section>
  );
}

export default Featured;
