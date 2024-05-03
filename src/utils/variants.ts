export const fadeIn = (direction: "up" | "down" | "left" | "right") => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? -85 : direction === "down" ? 85 : 0,
      x: direction === "left" ? -85 : direction === "right" ? 85 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
};

export const reveal = () => {
  return {
    hidden: {
      left: 0,
    },
    visible: { left: "100%" },
  };
};

export const scale = () => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };
};
