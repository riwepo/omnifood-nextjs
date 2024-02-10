import Meal from "../meals/meal";

const meal1 = {
  number: "01",
  index: 0,
  imgSrc: "/img/meals/meal-1.jpg",
  imgAlt: "Japanese Gyozas",
  summary: "Tell us what you like (and what not)",
  description: `Never again waste time thinking about what to eat!
     Omnifood AI will create a 100% personalized weekly meal plan just for you.
     It makes  sure you get all the nutrients and vitamins you need, no matter what diet you follow!`,
};
const meal2 = {
  number: "02",
  index: 1,
  imgSrc: "/img/meals/meal-2.jpg",
  imgAlt: "Avocado Salad",
  summary: "Approve your weekly meal plan",
  description: `Once per week, approve the meal plan generated for you by Omnifood
  AI. You can change ingredients, swap entire meals, or even add
  your own recipes.`,
};

function Meals() {
  return (
    <section id="meals" className="bg-white px-0 py-24">
      <div className="m-auto max-w-[75rem] px-8 py-0 text-center">
        <span className="mb-4 block text-base font-medium uppercase tracking-[0.75px] text-burnt-orange-200">
          Meals
        </span>
        <h2 className="mb-[6rem] text-5xl font-bold leading-tight tracking-[0.5px] text-greys-100">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="m-auto grid max-w-[75rem] grid-cols-3 items-center gap-y-[6rem] px-8 py-0">
        <Meal mealData={meal1} />
        <Meal mealData={meal2} />
        {/* <Step stepData={step3} /> */}
      </div>
    </section>
  );
}

export default Meals;
