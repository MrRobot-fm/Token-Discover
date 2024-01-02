export const list = {
  open: {
    x: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.2,
    },
  },
  closed: {
    x: "100%",
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
    },
  },
  closed: { opacity: 0.3, x: 300 },
};

export const heroRotate = {
  initial: {
    rotate: "30deg",
    opacity: 0,
    originX: 0,
    transition: {
      duration: 0.4,
      type: "tween",
    },
  },
  rotate: {
    rotate: "0deg",
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
    },
  },
};
