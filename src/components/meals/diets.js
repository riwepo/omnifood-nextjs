import Diet from "./diet";

function Diets() {
  return (
    <div className="diets flex flex-col items-center self-center md:col-span-2 lg:col-span-1 lg:items-start lg:self-start">
      <h3 className="heading-tertiary mb-8 text-center text-3xl font-bold leading-tight tracking-[0.5px] text-greys-100">
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

export default Diets;
