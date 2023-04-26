import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  img?: string;
  imgAlt?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, imgAlt, className, style }: Props) => {

  const { product } = useContext(ProductContext);
  const src = img ? img : product.img ?? noImage;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={src}
      alt={imgAlt}
    />
  )
};
