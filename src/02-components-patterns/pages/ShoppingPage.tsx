import { ProductCard } from '../components';

import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ count, isMaxCountReached, reset, increaseBy }) => (
          <>
            <ProductCard.Image className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
            <ProductCard.Title className="text-white" />
            <ProductCard.Buttons className="text-white custom-buttons" />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {isMaxCountReached
              ? null
              : (<button onClick={() => increaseBy(2)}>+2</button>)
            }
            <span>{count}</span>
          </>
        )}
      </ProductCard>

    </div>
  )

}
