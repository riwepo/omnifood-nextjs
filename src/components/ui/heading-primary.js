function HeadingPrimary({ children }) {
  return (
    <h1 className="mb-8 text-5xl font-bold tracking-[-0.5px] text-greys-100">
      {children}
    </h1>
  );
}

export default HeadingPrimary;

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
