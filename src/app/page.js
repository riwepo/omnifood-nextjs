import Header from "@/components/header";
import Hero from "@/components/hero";
import Featured from "@/components/featured";
import HowItWorks from "@/components/how-it-works";
import Meals from "@/components/meals";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import CallToAction from "@/components/call-to-action";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <Pricing />
      <CallToAction />
    </>
  );
}

export default Home;
