import Meal from "./meal";
import Diets from "./diets";

const mealData = [
  {
    index: 1,
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
  },
  {
    index: 2,
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
  },
];

function MealList() {
  return (
    <div className="m-auto mb-12 grid max-w-[75rem] grid-cols-3 items-center gap-x-20 px-8 py-0">
      {mealData.map((meal) => {
        return <Meal key={meal.index} mealData={meal} />;
      })}
      <Diets />
    </div>
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

export default MealList;
