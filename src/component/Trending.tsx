import styled from "styled-components";
import ProductList from "../data/products.json";
import { useState } from "react";
import type { productData, product } from "../model/product";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 3vw 3vw 3vw;
  gap: 1vw;
  > * {
    &:first-child {
      font-size: 3vw;
      font-weight: 700;
      color: #153a5b;
    }
  }
`;

const Products = styled.section`
  display: flex;
  overflow-x: auto;
  scrollbar-gutter: stable;
  scrollbar-color: #153a5b #f7f8f8;
  scrollbar-width: thin;
  width: 100%;
  gap: 2vw;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f7f8f8;
  border-radius: 1rem;
  gap: 0.5vw;
  padding: 1.5vw;
  margin-bottom: 1vw;
  img {
    max-width: 25vw;
  }

  .type {
    color: #153a5b;
    font-weight: 700;
    font-size: 1.1vw;
  }

  .subName {
    font-weight: 300;
    font-size: 1vw;
  }

  .options {
    display: flex;
    gap: 0.4vw;
  }

  .price {
    font-weight: 300;
    font-size: 0.9vw;
  }
`;

const Button = styled.button<{ $src?: string }>`
  background-image: url(${(props) => props.$src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  padding: 0;
  width: 5vw;
  height: 5vw;
  /* border: #153a5b 0.1px solid; */
  border: none;
  border-radius: 0.5rem;
`;

function ProductCard() {
  const productLists: Array<[string, product]> = ProductList.map((item) => {
    return [item.type, item.list[0]];
  });
  const [showProduct, setShowProduct] = useState(productLists);

  function HandleClickForOptions(dataType: string, dataId: string) {
    let index: number;

    showProduct.forEach((element) => {
      if (element[0] === dataType) {
        index = showProduct.indexOf(element);
      }
    });

    ProductList.map((item) => {
      if (item.type === dataType) {
        const currentList = item.list;
        const currentProduct = currentList.filter(
          (element) => element.subName === dataId,
        );
        const leftSide = showProduct.slice(0, index);
        const rightSide = showProduct.slice(index + 1);
        const newShowProduct: Array<[string, product]> = [
          ...leftSide,
          [dataType, currentProduct[0]],
          ...rightSide,
        ];
        setShowProduct(newShowProduct);
      }
    });
  }
  return (
    <>
      {showProduct.map((item: [string, product]) => {
        const type: string = item[0];
        const product: product = item[1];
        return (
          <Card>
            <img src={product.img} alt="" />
            <div className="type">{type}</div>
            <div className="subName">{product.subName}</div>
            <div className="options">
              {ProductList.map(({ type, list }: productData) => {
                if (type === item[0]) {
                  return (
                    <>
                      {list.map((element) => {
                        return (
                          <Button
                            $src={element.img}
                            key={element.subName + type}
                            onClick={() =>
                              HandleClickForOptions(type, element.subName)
                            }
                          ></Button>
                        );
                      })}
                    </>
                  );
                }
              })}
            </div>
            <div className="price">From ${product.price}</div>
          </Card>
        );
      })}
    </>
  );
}

function Trending() {
  return (
    <Main>
      <div>Now trending</div>
      <Products>
        <ProductCard />
      </Products>
    </Main>
  );
}

export default Trending;
