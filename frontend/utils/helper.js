export const getDiscountPricePercentage = (originalPrice, discountedPrice) => {
  const discountPercentage =
    ((originalPrice - discountedPrice) / originalPrice) * 100;
  return discountPercentage.toFixed(2);
};
