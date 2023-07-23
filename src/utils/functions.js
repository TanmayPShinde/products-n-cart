export const check_for_soup = (cartItems) => {
  let i = 0;
  const len = cartItems.length;
  while (i < len) {
    if (cartItems[i].id === 4) return true;
    i++;
  }
  return false;
};

// returns the savings on an item if offer applicable
export const check_for_offers = (item, itemPrice, isSoupPresent) => {
  // buy 1 get 1 free on cheese!
  // buy a soup and get bread for half the price!
  // get 1/3rd off on butter!
  switch (item.id) {
    case 1:
      // Bread
      if (isSoupPresent) return itemPrice / 2;
      break;
    case 5:
      return itemPrice / 3;
    default:
      return 0;
  }
};
