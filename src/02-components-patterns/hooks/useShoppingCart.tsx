import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interface';

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    setShoppingCart(prev => {
      const productInCart: ProductInCart = prev[product.id] || { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prev,
          [product.id]: productInCart
        }
      }

      // remove product from cart
      const { [product.id]: toDelete, ...rest } = prev;
      return rest;
      // or this
      // delete prev[product.id];
      // return { ...prev };

    })
  };

  return {
    shoppingCart,
    onProductCountChange,
  }

}
