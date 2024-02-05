import styled from "styled-components";
import ProductList from "../data/products.json";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 3vw 3vw 3vw;
  gap: 1vw;
`;

const Products = styled.section`
  display: flex;
  overflow-x: scroll;
  gap: 1vw;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

function ProductCard() {
  return (
    <Card>
      <img src="" alt="" />
      <div>Jetset & Go</div>
      <div>Obsidian Black</div>
      <div>
        <div>img</div>
        <div>img</div>
      </div>
      <div>From $109</div>
    </Card>
  );
}

function Trending() {
  console.log(ProductList);
  return (
    <Main>
      <div>Now Trending</div>
      <Products>
        <ProductCard />
        <div>Swing Squad</div>
        <div>LARQ Bottle </div>
      </Products>
    </Main>
  );
}

export default Trending;
