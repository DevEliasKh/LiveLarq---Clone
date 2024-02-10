export interface product {
  subName: string;
  img: string;
  price: number;
}

export interface productData {
  type: string;
  list: product[];
}
