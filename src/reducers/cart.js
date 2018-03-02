const cart = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        [action.productId]: state[action.productId]
          ? state[action.productId] + action.count
          : action.count
      };
    default:
      return state;
  }
};

export default cart;
