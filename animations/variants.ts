import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const slideInFromRight: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "circOut" } },
};

export const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "circOut" },
  },
};
