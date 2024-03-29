import ScrollNotifier from "./scroll-notifier";
import HeroText from "./hero-text";
import HeroPicture from "./hero-picture";

function Hero() {
  return (
    <section className="relative bg-whites-100 pb-6 pl-0 pr-0 pt-12">
      <div
        className="hero mx-auto mb-8 grid max-w-[75rem] grid-cols-1 items-center gap-16 px-8 py-0 md:px-16 lg:grid-cols-2 lg:gap-12 lg:px-8 xl:gap-24 2xl:max-w-[80rem]

"
      >
        <HeroText />
        <HeroPicture />
      </div>
      <ScrollNotifier />
    </section>
  );
}

export default Hero;
