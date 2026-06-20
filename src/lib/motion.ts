import type { Transition } from "framer-motion";

// Shared "gentle / naif" motion language: soft fades with a small rise,
// no overshoot or bounce. Strong ease-out so entrances still read as
// responsive rather than sluggish, just never abrupt.
const easeOutSoft = [0.22, 1, 0.36, 1] as const;

export const gentleTransition: Transition = {
  duration: 0.6,
  ease: easeOutSoft,
};

// Subtle press feedback for any clickable element.
export const pressTransition: Transition = {
  duration: 0.15,
  ease: easeOutSoft,
};
