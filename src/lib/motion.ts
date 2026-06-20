import type { Transition, Variants } from "framer-motion";

// Shared "gentle / naif" motion language: soft fades with a small rise,
// no overshoot or bounce. Strong ease-out so entrances still read as
// responsive rather than sluggish, just never abrupt.
const easeOutSoft = [0.22, 1, 0.36, 1] as const;
const easeInOutSoft = [0.45, 0, 0.2, 1] as const;

export const gentleTransition: Transition = {
  duration: 0.6,
  ease: easeOutSoft,
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: gentleTransition },
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: gentleTransition },
};

export const staggerContainer = (stagger = 0.12): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});

// Expanding a card is the user waiting to see something: a little more
// deliberate going in. Collapsing should feel immediate, like the system
// responding the instant they ask it to close.
export const cardExpandTransition: Transition = {
  duration: 0.45,
  ease: easeInOutSoft,
};

export const cardCollapseTransition: Transition = {
  duration: 0.25,
  ease: easeOutSoft,
};

// Subtle press feedback for any clickable element.
export const pressTransition: Transition = {
  duration: 0.15,
  ease: easeOutSoft,
};
