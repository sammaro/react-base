import { Product } from "../interfaces/interface";

const product1 = {
  id: '1',
  img: './coffee-mug.png',
  imgAlt: 'Coffe Mug',
  title: 'Coffe Mug - Card',
}

const product2 = {
  id: '2',
  img: './coffee-mug2.png',
  imgAlt: 'Coffe Mug 2',
  title: 'Coffe Mug - Meme',
}

export const products: Product[] = [product1, product2];
