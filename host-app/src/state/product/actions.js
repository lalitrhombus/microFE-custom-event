export const LIST_PRODUCTS = 'product/LIST_PRODUCTS';
export const ADD_PRODUCT_IN_CART = 'product/ADD_PRODUCT_IN_CART';

export const listProducts = payload => ({
  type: LIST_PRODUCTS,
  payload,
});


export const addProductInCart = payload => ({
  type: ADD_PRODUCT_IN_CART,
  payload,
});
