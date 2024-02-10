import Image from "next/image";

function Meal({ mealData }) {
  const imgWidth = 700 * 0.35;
  const imgHeight = 467 * 0.35;

  return (
    <div className="meal overflow-hidden rounded-xl">
      <Image
        src={mealData.imgSrc}
        alt={mealData.imgAlt}
        width={imgWidth}
        height={imgHeight}
      />
      <div>
        <div className="meal-content">
          <div className="meal-tags  flex gap-3">
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
        </div>
        <p className="meal-title mb-8 text-2xl font-semibold text-greys-100">
          {mealData.heading}
        </p>
        <ul class="meal-attributes">
          <li class="meal-attribute">
            <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
            <span>
              <strong>{mealData.calories}</strong> calories
            </span>
          </li>
          <li class="meal-attribute">
            <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
            <span>
              NutriScore &reg; <strong>{mealData.nutriScore}</strong>
            </span>
          </li>
          <li class="meal-attribute">
            <ion-icon class="meal-icon" name="star-outline"></ion-icon>
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

export default Meal;
