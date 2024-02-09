import styled from "styled-components";
import ProductList from "../data/products.json";
import { useState } from "react";

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
  }

  .options {
    display: flex;
    gap: 0.4vw;
  }

  .price {
    font-weight: 300;
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
  const productList = ProductList;
  const productLists = ProductList.map((item) => {
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

    productList.map((item) => {
      if (item.type === dataType) {
        const currentList = item.list;
        const currentProduct = currentList.filter(
          (element) => element.subName === dataId,
        );
        const leftSide = showProduct.slice(0, index);
        const rightSide = showProduct.slice(index + 1);
        const newShowProduct = [
          ...leftSide,
          [dataType, currentProduct[0]],
          ...rightSide,
        ];
        setShowProduct(newShowProduct);
      }
    });
  }
  showProduct.map((item) => console.log(item));
  return (
    <>
      {productList.map(({ type, list }) => {
        return (
          <Card key={type}>
            <img src={list[0].img} alt="" />
            <div className="type">{type}</div>
            <div className="subName">{list[0].subName}</div>
            <div className="options">
              {list.map((item) => {
                return (
                  <Button
                    $src={item.img}
                    key={item.subName + type}
                    onClick={() => HandleClickForOptions(type, item.subName)}
                  ></Button>
                );
              })}
            </div>
            <div className="price">From ${list[0].price}</div>
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
