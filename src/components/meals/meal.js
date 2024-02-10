import Image from "next/image";

function Meal({ mealData }) {
  const imgWidth = 700 * 0.35;
  const imgHeight = 467 * 0.35;
  console.log(mealData);
  // let textOrder, picOrder;
  // if (stepData.index % 2 === 0) {
  //   textOrder = stepData.index * 2;
  //   picOrder = textOrder + 1;
  // } else {
  //   picOrder = stepData.index * 2;
  //   textOrder = picOrder + 1;
  // }
  // // note tailwind needs complete unbroken class names in the source file
  // const orders = [
  //   "order-1",
  //   "order-2",
  //   "order-3",
  //   "order-4",
  //   "order-5",
  //   "order-6",
  // ];
  // const textOrderStr = orders[textOrder];
  // const picOrderStr = orders[picOrder];

  // console.log(textOrderStr, picOrderStr);

  return (
    <div>
      <Image
        src={mealData.imgSrc}
        alt={mealData.imgAlt}
        width={imgWidth}
        height={imgHeight}
      />
      <div>content</div>
    </div>
  );
}

export default Meal;
