let nextProductId = 4;

export const addProduct = (name, description, cost) => ({
  type: "ADD_PRODUCT",
  id: nextProductId++,
  name,
  description,
  cost
});

export const addProductToCart = (productId, count) => ({
  type: "ADD_PRODUCT_TO_CART",
  productId,
  count
});
