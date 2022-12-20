export const calculateCartTotal = (cartItems, selectedCurrencyIndex) => {
 let total = 0;
 cartItems.forEach((item) => {
  total += item.quantity * item.product.prices[selectedCurrencyIndex].amount;
 });
 return total;
};
