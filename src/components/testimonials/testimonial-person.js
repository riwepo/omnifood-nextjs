import Image from "next/image";

function TestimonialPerson({ personData }) {
  return (
    <figure className="testimonial">
      <Image
        className="testimonial-img mb-5 rounded-full"
        alt={`Photo of customer ${personData.name}`}
        src={personData.img}
      />
      <blockquote className="testimonial-text mb-4 text-lg leading-relaxed">
        {personData.text}
      </blockquote>
      <p className="testimonial-name text-base text-greys-500">
        &mdash; {personData.name}
      </p>
    </figure>
  );
}

export default TestimonialPerson;
