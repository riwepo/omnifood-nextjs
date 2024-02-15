import HeadingSecondary from "../ui/heading-secondary";
import Subheading from "../ui/subheading";
import TestimonialPeople from "./testimonial-people";

function TestimonialPeopleContainer() {
  return (
    <div className="testimonials-container p-24">
      <Subheading>Testimonials</Subheading>
      <HeadingSecondary>Once you try it, you can't go back</HeadingSecondary>
      <TestimonialPeople />
    </div>
  );
}

export default TestimonialPeopleContainer;

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
