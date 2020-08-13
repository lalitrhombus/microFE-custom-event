import { LIST_PRODUCTS, ADD_PRODUCT_IN_CART } from './actions';

export const INITIAL_STATE = {
  list: null,
  cart: 0
};

export default (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case LIST_PRODUCTS:
      return {
        ...state,
        list: action.payload,
      };
    case ADD_PRODUCT_IN_CART:
        return {
          ...state,
          cart: action.payload ? action.payload : state.cart + 1,
        };
    default:
      return state;
  }
};
