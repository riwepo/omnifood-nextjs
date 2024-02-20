import mealImage1 from "@/public/img/meals/meal-1.jpg";
import mealImage2 from "@/public/img/meals/meal-2.jpg";

import Meal from "./meal";
import Diets from "./diets";

const mealData = [
  {
    key: 1,
    img: mealImage1,
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
    key: 2,
    img: mealImage2,
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

function MealsAndDiets() {
  return (
    <div className="_grid m-auto mb-12 grid max-w-[75rem] grid-cols-3 items-center gap-x-12 gap-y-12 px-8 py-0 md:gap-y-16 xl:gap-x-24">
      {mealData.map((meal) => {
        return <Meal key={meal.key} mealData={meal} />;
      })}
      <Diets />
    </div>
  );
}

export default MealsAndDiets;
