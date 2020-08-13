import { useState } from 'react';
import { useStateValue } from '../../index';
import { loadProducts } from '../queries';
import { listProducts, addProductInCart } from '../actions';

const useProducts = () => {
  const [{ product }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const request = async () => {
    setIsLoading(true);

    const response = await loadProducts();

    if (response) {
      dispatch(listProducts(response));
    } else {
      const err = [];
      dispatch(listProducts(err));
    }
    setIsLoading(false);
  };

  const setCartCount = async (count) => {
    dispatch(addProductInCart(count));
  };

  return [product, isLoading, request, setCartCount];
};

export default useProducts;
