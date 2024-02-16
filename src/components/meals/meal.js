import Image from "next/image";
import FlameIcon from "@/public/icons/meals/flame-outline.svg";
import StarIcon from "@/public/icons/meals/star-outline.svg";
import RestaurantIcon from "@/public/icons/meals/restaurant-outline.svg";

function Meal({ mealData }) {
  return (
    <div className="meal overflow-hidden rounded-xl bg-white shadow-xl shadow-black/10 transition-all duration-700 hover:-translate-y-3">
      <Image src={mealData.img} alt={mealData.imgAlt} />

      <div className="meal-content pb-12 pl-12 pr-12 pt-8">
        <div className="meal-tags mb-3 flex gap-3">
          {mealData.tags.map((tag) => {
            return (
              <span
                key={tag.id}
                className={`${tag.colour} inline-block rounded-xl px-2 py-1 text-xs font-semibold uppercase text-greys-100`}
              >
                {tag.heading}
              </span>
            );
          })}
        </div>

        <p className="meal-title mb-8 text-2xl font-semibold text-greys-100">
          {mealData.heading}
        </p>
        <ul className="meal-attributes flex list-none flex-col gap-5">
          <li className="meal-attribute flex items-center gap-4 text-lg">
            <FlameIcon
              className="meal-icon h-8 w-8 text-burnt-orange-100"
              name="flame-outline"
            />
            <span>
              <strong>{mealData.calories}</strong> calories
            </span>
          </li>
          <li className="meal-attribute flex items-center gap-4 text-lg">
            <RestaurantIcon
              className="restaurant-icon h-8 w-8 text-burnt-orange-100"
              name="restaurant-outline"
            />
            <span>
              NutriScore &reg; <strong>{mealData.nutriScore}</strong>
            </span>
          </li>
          <li className="meal-attribute flex items-center gap-4 text-lg">
            <StarIcon
              className="star-icon h-8 w-8 text-burnt-orange-100"
              name="star-outline"
            ></StarIcon>
            <span>
              <strong>{mealData.rating}</strong> rating ({mealData.reviews})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// .meal {
//   box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
//   border-radius: 11px;
//   overflow: hidden;
//   transition: all 0.4s;
// }

// .meal:hover {
//   transform: translateY(-1.2rem);
//   box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
// }

// .meal-content {
//   padding: 3.2rem 4.8rem 4.8rem 4.8rem;
// }

// .meal-tags {
//   margin-bottom: 1.2rem;
//   display: flex;
//   gap: 0.4rem;
// }

// .tag {
//   display: inline-block;
//   padding: 0.4rem 0.8rem;
//   font-size: 1.2rem;
//   text-transform: uppercase;
//   color: #333;
//   border-radius: 100px;
//   font-weight: 600;
// }

// .meal-title {
//   font-size: 2.4rem;
//   color: #333;
//   font-weight: 600;
//   margin-bottom: 3.2rem;
// }

// .meal-attributes {
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// }

// .meal-attribute {
//   font-size: 1.8rem;
//   display: flex;
//   align-items: center;
//   gap: 1.6rem;
// }

export default Meal;
