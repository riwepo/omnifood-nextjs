import Header from "@/components/header";
import Hero from "@/components/hero";
import Featured from "@/components/featured";
import HowItWorks from "@/components/how-it-works";
import Meals from "@/components/meals";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer/footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Featured />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <CallToAction /> */}
      </main>
      <Footer />
    </>
  );
}

export default Home;
