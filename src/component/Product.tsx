import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1vw;
  padding: 0 3vw 3vw 3vw;
  width: inherit;
  > * {
    &:first-child {
      font-size: 3.3vw;
      font-weight: 700;
      color: #153a5b;
    }
  }
`;

const Product = styled.section`
  display: flex;
  justify-content: space-between;
  @media (max-width: 780px) {
    flex-direction: column;
    gap: 1vw;
  }
  width: 100%;
  color: #153a5b;
  img {
    @media (max-width: 780px) {
      width: 80vw;
    }
    width: 30vw;
    border-radius: 1rem;
  }

  p {
    @media (max-width: 780px) {
      font-weight: 700;
      font-size: 3.5vw;
    }
    font-weight: 600;
    font-size: 1.5vw;
    padding: 1vw 0 0.5vw 0;
  }
  a {
    @media (max-width: 780px) {
      font-size: 2vw;
    }
    font-size: 1vw;
  }
`;

function ProductSection() {
  return (
    <Main>
      <div>Shop</div>
      <Product>
        <div>
          <img src="/assets/content_section-purification.webp" alt="" />
          <p>Purification</p>
          <a>Shop now</a>
        </div>
        <div>
          <img src="/assets/content_section-home.webp" alt="" />
          <p>Home</p>
          <a>Shop now</a>
        </div>
        <div>
          <img src="/assets/content_section-drinkware-others.webp" alt="" />
          <p>Drinkware</p>
          <a>Shop now</a>
        </div>
      </Product>
    </Main>
  );
}

export default ProductSection;
