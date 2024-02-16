import Gallery from "./gallery";
import TestimonialPeopleContainer from "./testimonial-people-container";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-testimonials grid grid-cols-1 items-center bg-whites-100 px-0 py-24 lg:grid-cols-[55fr_45fr]"
    >
      <TestimonialPeopleContainer />

      <Gallery />
    </section>
  );
}

export default Testimonials;

// .section-testimonials {
//   background-color: #fdf2e9;
//   display: grid;
//   grid-template-columns: 55fr 45fr;
//   align-items: center;
// }

// .testimonials-container {
//   padding: 9.6rem;
// }

// .subheading {
//   display: block;
//   font-size: 1.6rem;
//   font-weight: 500;
//   color: #cf711f;
//   text-transform: uppercase;
//   margin-bottom: 1.6rem;
//   letter-spacing: 0.75px;
// }

// .heading-primary,
// .heading-secondary,
// .heading-tertiary {
//   font-weight: 700;
//   color: #333;
//   /* color: #45260a; */
//   /* color: #343a40; */
//   letter-spacing: -0.5px;
// }
