import HeadingSecondary from "../ui/heading-secondary";
import Subheading from "../ui/subheading";

const meal1 = {
  index: 0,
  imgSrc: "/img/meals/meal-1.jpg",
  imgAlt: "Japanese Gyozas",
  tags: [
    { id: "vegetarian", heading: "Vegetarian", colour: "bg-tags-vegetarian" },
  ],
  heading: "Japanese Gyozas",
  calories: 650,
  nutriScore: 74,
  rating: 4.9,
  reviews: 537,
};
const meal2 = {
  index: 1,
  imgSrc: "/img/meals/meal-2.jpg",
  imgAlt: "Avocado Salad",
  tags: [
    { id: "vegan", heading: "Vegan", colour: "bg-tags-vegan" },
    { id: "paleo", heading: "Paleo", colour: "bg-tags-paleo" },
  ],
  heading: "Avocado Salad",
  calories: 400,
  nutriScore: 92,
  rating: 4.8,
  reviews: 441,
};

function Pricing() {
  return (
    <section id="pricing" className="section-pricing bg-white px-0 py-24">
      <div className="container m-auto max-w-[75rem] px-8 py-0 text-center">
        <Subheading>Pricing</Subheading>
        <HeadingSecondary>
          Eating well without breaking the bank
        </HeadingSecondary>
      </div>
    </section>
  );
}

// .container {
//   /* 1140px */
//   max-width: 120rem;
//   padding: 0 3.2rem;
//   margin: 0 auto;
// }

// .all-recipes {
//   text-align: center;
//   font-size: 1.8rem;
// }

// .link:link,
// .link:visited {
//   display: inline-block;
//   color: #e67e22;
//   text-decoration: none;
//   border-bottom: 1px solid currentColor;
//   padding-bottom: 2px;
//   transition: all 0.3s;
// }

// .link:hover,
// .link:active {
//   color: #cf711f;
//   border-bottom: 1px solid transparent;
// }

export default Pricing;
