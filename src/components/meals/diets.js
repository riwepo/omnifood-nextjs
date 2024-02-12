import Diet from "./diet";

function Diets() {
  return (
    <div className="diets">
      <h3 className="heading-tertiary text mb-8 text-3xl font-bold leading-tight tracking-[0.5px] text-greys-100">
        Works with any diet:
      </h3>
      <ul className="list flex list-none flex-col gap-4">
        <Diet text="Vegetarian" />
        <Diet text="Vegan" />
        <Diet text="Pescatarian" />
        <Diet text="Gluten-free" />
        <Diet text="Lactose-free" />
        <Diet text="Keto" />
        <Diet text="Paleo" />
        <Diet text="Low FODMAP" />
        <Diet text="Kid-friendly" />
      </ul>
    </div>
  );
}

// .diets {
//     grid-column: 1 / -1;
//     justify-self: center;
//   }

// .heading-primary,
// .heading-secondary,
// .heading-tertiary {
//   font-weight: 700;
//   color: #333;
//   /* color: #45260a; */
//   /* color: #343a40; */
//   letter-spacing: -0.5px;
// }

// .heading-primary {
//   font-size: 5.2rem;
//   line-height: 1.05;
//   margin-bottom: 3.2rem;
// }

// .heading-secondary {
//   font-size: 4.4rem;
//   line-height: 1.2;
//   margin-bottom: 9.6rem;
// }

// .heading-tertiary {
//   font-size: 3rem;
//   line-height: 1.2;
//   margin-bottom: 3.2rem;
// }

// .list {
//     list-style: none;
//     display: flex;
//     flex-direction: column;
//     gap: 1.6rem;
//   }

export default Diets;
