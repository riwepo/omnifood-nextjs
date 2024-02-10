import Image from "next/image";

function Step({ stepData }) {
  const imgWidth = 400 * 0.35;
  const imgHeight = 809 * 0.35;
  return (
    <div className="m-auto grid max-w-[75rem] grid-cols-2 items-center px-8 py-0">
      <div>
        <p className="text-greys-400 mb-4 text-[5.4rem] font-semibold">01</p>
        <h3 className="mb-8 text-3xl font-bold leading-tight tracking-[0.5px] text-greys-100">
          {stepData.summary}
        </h3>
        <p className="text-lg leading-7">{stepData.description}</p>
      </div>

      <div
        className={`
        before:bg-whites-100
        after:bg-whites-200
        relative
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
        <Image
          src={stepData.imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt={stepData.imgAlt}
        />
      </div>
    </div>
  );
}

export default Step;

// .step-img-box {
//     position: relative;

//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .step-img-box::before,
//   .step-img-box::after {
//     content: "";
//     display: block;
//     border-radius: 50%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }

//   .step-img-box::before {
//     width: 60%;
//     /* height: 60%; */

//     /* 60% of parent's width */
//     padding-bottom: 60%;

//     background-color: #fdf2e9;
//     z-index: -2;
//   }

//   .step-img-box::after {
//     width: 45%;
//     padding-bottom: 45%;
//     background-color: #fae5d3;
//     z-index: -1;
//   }

// .step-number {
//     font-size: 8.6rem;
//     font-weight: 600;
//     color: #ddd;
//     margin-bottom: 1.2rem;
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

// .step-description {
//     font-size: 1.8rem;
//     line-height: 1.8;
//   }
