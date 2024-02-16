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
  // note tailwind needs complete unbroken class names in the source file
  const orders = [
    "order-1",
    "order-2",
    "order-3",
    "order-4",
    "order-5",
    "order-6",
  ];
  const textOrderStr = orders[textOrder];
  const picOrderStr = orders[picOrder];

  return (
    <>
      <div className={textOrderStr}>
        <p className="mb-4 text-[5.4rem] font-semibold text-greys-400">
          {stepData.number}
        </p>
        <HeadingTertiary>{stepData.summary}</HeadingTertiary>
        <p className="text-lg leading-7">{stepData.description}</p>
      </div>

      {/* TODO the bloody circles stopped working again */}

      <div
        className={`
        relative
        before:bg-whites-100
        after:bg-whites-200
        ${picOrderStr}
        flex
        items-center
        justify-center
         before:absolute
         before:left-1/2
         before:top-1/2
         before:-z-20
         before:block
         before:w-[60%]
         before:-translate-x-1/2
         before:-translate-y-1/2
         before:rounded-full
         before:pb-[60%]  
         after:absolute
         after:left-1/2
         after:top-1/2
         after:-z-10
         after:block
         after:w-[45%]
         after:-translate-x-1/2
         after:-translate-y-1/2
         after:rounded-full
         after:pb-[45%]       
        `}
      >
        <Image src={stepData.img} className="w-[35%]" alt={stepData.imgAlt} />
      </div>
    </>
  );
}

export default Step;
