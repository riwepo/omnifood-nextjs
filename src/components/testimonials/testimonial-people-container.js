import HeadingSecondary from "../ui/heading-secondary";
import Subheading from "../ui/subheading";
import TestimonialPeople from "./testimonial-people";

function TestimonialPeopleContainer() {
  return (
    <div className="testimonials-container px-8 py-24 xl:px-24 xl:py-24">
      <Subheading>Testimonials</Subheading>
      <HeadingSecondary>
        Once you try it, you can&apos;t go back
      </HeadingSecondary>
      <TestimonialPeople />
    </div>
  );
}

export default TestimonialPeopleContainer;
