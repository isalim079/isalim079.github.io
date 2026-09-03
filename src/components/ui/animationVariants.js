export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export const item = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
};
