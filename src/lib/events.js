import { createEvent } from "react-event-hook";

// this event is used to notify when the hero scrolls into and out of view
export const { useScrollListener, emitScroll } = createEvent("scroll")();
