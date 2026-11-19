export const ease = [0.22, 1, 0.36, 1] as const;

export const dur = {
  fast: 0.25,
  base: 0.6,
  slow: 0.9,
};

export const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: dur.base, ease },
  },
};

export const staggerContainer = (s = 0.08) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: s,
    },
  },
});
