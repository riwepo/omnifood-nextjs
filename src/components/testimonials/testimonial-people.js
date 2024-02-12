import TestimonialPerson from "./testimonial-person";

function TestimonialPeople() {
  const personData = [
    {
      name: "Dave Bryson",
      imgSrc: "/img/customers/testimonials/dave.jpg",
      text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    },
    {
      name: "Ben Hadley",
      imgSrc: "/img/customers/testimonials/ben.jpg",
      text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    },
    {
      name: "Steve Miller",
      imgSrc: "/img/customers/testimonials/steve.jpg",
      text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    },
    {
      name: "Hannah Smith",
      imgSrc: "/img/customers/testimonials/hannah.jpg",
      text: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    },
  ];
  return (
    <div className="testimonials grid grid-cols-2 gap-x-20 gap-y-12 ">
      <TestimonialPerson personData={personData[0]} />
      <TestimonialPerson personData={personData[1]} />
      <TestimonialPerson personData={personData[2]} />
      <TestimonialPerson personData={personData[3]} />
    </div>
  );
}

export default TestimonialPeople;

// .testimonials {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   row-gap: 4.8rem;
//   column-gap: 8rem;
// }
