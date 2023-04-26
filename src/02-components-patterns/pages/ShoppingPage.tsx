import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  img: './coffee-mug.png',
  imgAlt: 'Coffe Mug',
  title: 'Coffe Mug - Card',
}

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="text-white custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          <ProductCard.Image
            className="custom-image"
            style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
            }}
          />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="text-white custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductCard.Image
            style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
            }}
          />
          <ProductCard.Title
            style={{
              fontWeight: 'bold'
            }}
          />
          <ProductCard.Buttons
            style={{
              display: 'flex',
              justifyContent: 'end'
            }}
          />
        </ProductCard>
      </div>
    </div>
  )
}