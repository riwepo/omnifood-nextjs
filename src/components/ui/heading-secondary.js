import { cn } from "../../lib/utils";

function HeadingSecondary({ children, extraClasses }) {
  const classes = cn(
    "mb-24 text-left font-bold leading-5 tracking-[-0.5px] text-greys-100 text-[2.25rem] xl:text-[2.75rem]",
    extraClasses,
  );
  return <h2 className={classes}>{children}</h2>;
}

export default HeadingSecondary;
