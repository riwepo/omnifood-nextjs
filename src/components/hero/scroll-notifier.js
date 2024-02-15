"use client";

import { useInView } from "react-intersection-observer";
import { emitScroll } from "../../lib/events";

// this is a transparent div
// it sits on top of the hero
// it emits events when it scrolls in and out of view
function ScrollNotifier() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  if (inView) {
    emitScroll(true);
  } else {
    emitScroll(false);
  }
  return (
    <div
      ref={ref}
      className="absolute left-0 top-0 h-full w-full bg-white/0"
    ></div>
  );
}

export default ScrollNotifier;
