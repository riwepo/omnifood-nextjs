import Feature from "./feature";
import InfiniteIcon from "../../../public/icons/features/infinite-outline.svg";
import NutritionIcon from "../../../public/icons/features/nutrition-outline.svg";
import LeafIcon from "../../../public/icons/features/leaf-outline.svg";
import PauseIcon from "../../../public/icons/features/pause-circle-outline.svg";

function Inclusions() {
  const features = [
    {
      index: 0,
      icon: (
        <InfiniteIcon className="infinite-icon h-8 w-8 text-burnt-orange-100" />
      ),
      title: "Never cook again!",
      text: "Our subscriptions cover 365 days per year, even including major holidays.",
    },
    {
      index: 1,
      icon: (
        <NutritionIcon className="nutrition-icon h-8 w-8 text-burnt-orange-100" />
      ),
      title: "Local and organic",
      text: "Our cooks only use local, fresh, and organic products to prepare your meals.",
    },
    {
      index: 2,
      icon: <LeafIcon className="leaf-icon h-8 w-8 text-burnt-orange-100" />,
      title: "No waste",
      text: "All our partners only use reusable containers to package all your meals.",
    },
    {
      index: 3,
      icon: <PauseIcon className="pause-icon h-8 w-8 text-burnt-orange-100" />,
      title: "Pause anytime",
      text: "Going on vacation? Just pause your subscription, and we refund unused days.",
    },
  ];
  return (
    <div className="_grid container mx-auto my-0 mb-12 grid max-w-[75rem] grid-cols-4 gap-x-12 gap-y-12 md:gap-y-16 xl:gap-x-24">
      {features.map((feature) => {
        return <Feature key={feature.index} featureData={feature} />;
      })}
    </div>
  );
}

export default Inclusions;

// .feature-icon {
//     color: #e67e22;
//     height: 3.2rem;
//     width: 3.2rem;
//     background-color: #fdf2e9;
//     margin-bottom: 3.2rem;
//     padding: 1.6rem;
//     border-radius: 50%;
//   }
