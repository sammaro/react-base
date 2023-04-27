import { ProductCard } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';

import { products } from '../data/products';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>

        {products.map(product => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductCard.Image className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
            <ProductCard.Title className="text-white" />
            <ProductCard.Buttons className="text-white custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: '100px' }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductCard.Image className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
            <ProductCard.Buttons
              className="text-white custom-buttons"
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            />
          </ProductCard>
        ))}
      </div>

    </div>
  )

}
