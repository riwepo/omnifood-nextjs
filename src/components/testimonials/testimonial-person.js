import Image from "next/image";

function TestimonialPerson({ personData }) {
  const imgWidth = 128 * 1;
  const imgHeight = 128 * 1;
  return (
    <figure className="testimonial">
      <Image
        width={imgHeight}
        height={imgWidth}
        className="testimonial-img mb-5 rounded-full"
        alt={`Photo of customer ${personData.name}`}
        src={personData.imgSrc}
      />
      <blockquote className="testimonial-text mb-4 text-lg leading-relaxed">
        {personData.text}
      </blockquote>
      <p className="testimonial-name text-greys-500 text-base">
        &mdash; {personData.name}
      </p>
    </figure>
  );
}

export default TestimonialPerson;

// .testimonial-img {
//   width: 6.4rem;
//   border-radius: 50%;
//   margin-bottom: 1.2rem;
// }

// .testimonial-text {
//   font-size: 1.8rem;
//   line-height: 1.8;
//   margin-bottom: 1.6rem;
// }

// .testimonial-name {
//   font-size: 1.6rem;
//   color: #6f6f6f;
// }
