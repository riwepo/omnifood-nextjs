import TestimonialPerson from "./testimonial-person";

import daveImg from "@/public/img/customers/testimonials/dave.jpg";
import benImg from "@/public/img/customers/testimonials/ben.jpg";
import steveImg from "@/public/img/customers/testimonials/steve.jpg";
import hannahImg from "@/public/img/customers/testimonials/hannah.jpg";

function TestimonialPeople() {
  const personData = [
    {
      key: 1,
      name: "Dave Bryson",
      img: daveImg,
      text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    },
    {
      key: 2,
      name: "Ben Hadley",
      img: benImg,
      text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    },
    {
      key: 3,
      name: "Steve Miller",
      img: steveImg,
      text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    },
    {
      key: 4,
      name: "Hannah Smith",
      img: hannahImg,
      text: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    },
  ];
  return (
    <div className="testimonials grid grid-cols-2 gap-x-20 gap-y-12 ">
      {personData.map((person) => {
        return <TestimonialPerson key={person.key} personData={person} />;
      })}
    </div>
  );
}

export default TestimonialPeople;
