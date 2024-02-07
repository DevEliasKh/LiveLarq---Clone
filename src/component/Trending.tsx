import styled from "styled-components";
import ProductList from "../data/products.json";
// import { useState } from "react";

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

    img {
      width: 5vw;
      height: 5vw;
    }
  }

  .price {
    font-weight: 300;
  }
`;

function ProductCard() {
  // const [showProduct, setShowProduct] = useState();
  const go = ProductList;
  console.log(go);
  return (
    <>
      {go.map(({ type, list }) => {
        return (
          <Card>
            <img src={list[0].img} alt="" />
            <div className="type">{type}</div>
            <div className="subName">{list[0].subName}</div>
            <div className="options">
              {list.map((item) => {
                return <img src={item.img} alt="" />;
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
