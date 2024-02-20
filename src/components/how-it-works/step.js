import Image from "next/image";

import HeadingTertiary from "../ui/heading-tertiary";

function Step({ stepData }) {
  let textOrder, picOrder;
  // note key starts at 1
  const index = stepData.key - 1;
  if (index % 2 === 0) {
    textOrder = index * 2;
    picOrder = textOrder + 1;
  } else {
    picOrder = index * 2;
    textOrder = picOrder + 1;
  }

  // note1 tailwind needs complete unbroken class names in the source file
  // that's why these strings are listed here and not contructed from a template

  // note2 these grid orders only apply for screen sizes above small
  // for the small size (phone) we use the natural order
  // hence the md: breakpoint on each string
  const orders = [
    "md:order-1",
    "md:order-2",
    "md:order-3",
    "md:order-4",
    "md:order-5",
    "md:order-6",
  ];
  const textOrderStr = orders[textOrder];
  const picOrderStr = orders[picOrder];

  const imgBoxClass = `
  relative
  ${picOrderStr}
  flex
  items-center
  justify-center
  `;

  const imgBoxClassBefore = `
  before:bg-whites-100
  before:absolute
  before:left-1/2
  before:top-1/2
  before:z-10
  before:block
  before:w-[60%]
  before:-translate-x-1/2
  before:-translate-y-1/2
  before:rounded-full
  before:pb-[60%]  
  `;

  const imgBoxClassAfter = `
  after:bg-whites-200
  after:absolute
  after:left-1/2
  after:top-1/2
  after:z-20
  after:block
  after:w-[45%]
  after:-translate-x-1/2
  after:-translate-y-1/2
  after:rounded-full
  after:pb-[45%]   
  `;

  return (
    <>
      <div className={textOrderStr}>
        <p className="mb-4 text-[4.63rem] font-semibold text-greys-400 lg:text-[5.37rem]">
          {stepData.number}
        </p>
        <HeadingTertiary>{stepData.summary}</HeadingTertiary>
        <p className="text-lg leading-7">{stepData.description}</p>
      </div>

      <div
        className={`${imgBoxClass} ${imgBoxClassBefore} ${imgBoxClassAfter}`}
      >
        <Image
          src={stepData.img}
          className="z-30 w-[35%]"
          alt={stepData.imgAlt}
        />
      </div>
    </>
  );
}

export default Step;
