const trending = {
  card1: "image",
  card2: "image",
  card3: "text",
};

export const TopCollectionMap = Object.values(trending).map((type) => {
  return {
    contentId: type,
    hasText: type === "text",
  };
});
