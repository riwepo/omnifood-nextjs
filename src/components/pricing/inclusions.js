import Feature from "./feature";
import InfiniteIcon from "@/public/icons/features/infinite-outline.svg";
import NutritionIcon from "@/public/icons/features/nutrition-outline.svg";
import LeafIcon from "@/public/icons/features/leaf-outline.svg";
import PauseIcon from "@/public/icons/features/pause-circle-outline.svg";

function Inclusions() {
  const featureData = [
    {
      key: 1,
      icon: (
        <InfiniteIcon className="infinite-icon h-8 w-8 text-burnt-orange-100" />
      ),
      title: "Never cook again!",
      text: "Our subscriptions cover 365 days per year, even including major holidays.",
    },
    {
      key: 2,
      icon: (
        <NutritionIcon className="nutrition-icon h-8 w-8 text-burnt-orange-100" />
      ),
      title: "Local and organic",
      text: "Our cooks only use local, fresh, and organic products to prepare your meals.",
    },
    {
      key: 3,
      icon: <LeafIcon className="leaf-icon h-8 w-8 text-burnt-orange-100" />,
      title: "No waste",
      text: "All our partners only use reusable containers to package all your meals.",
    },
    {
      key: 4,
      icon: <PauseIcon className="pause-icon h-8 w-8 text-burnt-orange-100" />,
      title: "Pause anytime",
      text: "Going on vacation? Just pause your subscription, and we refund unused days.",
    },
  ];
  return (
    <div className="_grid container mx-auto my-0 mb-12 grid max-w-[75rem] grid-cols-1 gap-x-12 gap-y-12 px-6 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4 xl:gap-x-24">
      {featureData.map((feature) => {
        return <Feature key={feature.key} featureData={feature} />;
      })}
    </div>
  );
}

export default Inclusions;
