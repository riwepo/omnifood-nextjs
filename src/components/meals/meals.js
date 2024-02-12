import Meal from "../meals/meal";
import Diets from "../meals/diets";

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

function Meals() {
  return (
    <section id="meals" className="section-meals bg-white px-0 py-24">
      <div className="container m-auto max-w-[75rem] px-8 py-0 text-center">
        <span className="mb-4 block text-base font-medium uppercase tracking-[0.75px] text-burnt-orange-200">
          Meals
        </span>
        <h2 className="container mb-[6rem] text-5xl font-bold leading-tight tracking-[0.5px] text-greys-100">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="m-auto mb-12 grid max-w-[75rem] grid-cols-3 items-center gap-x-20 px-8 py-0">
        <Meal mealData={meal1} />
        <Meal mealData={meal2} />
        <Diets />
      </div>

      <div class="all-recipes container m-auto max-w-[75rem] px-8 py-0 text-center text-lg ">
        <a
          href="#"
          className="link inline-block border-b-[1px] border-current pb-[2px] text-burnt-orange-100 transition-all duration-300 hover:border-none hover:text-burnt-orange-200"
        >
          See all recipes &rarr;
        </a>
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

export default Meals;
