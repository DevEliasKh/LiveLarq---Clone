import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdf7f6;
  margin: 0 3vw 3vw 3vw;
  padding: 3vw;
  border-radius: 1rem;

  @media (max-width: 780px) {
    flex-direction: column;
    gap: 4vw;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  color: #153a5b;
  > * {
    &:first-child {
      fill: #f3756d;
    }
  }
  span {
    font-size: 1.5vw;
    font-weight: 600;
  }
  div {
    max-width: 50ch;
    font-size: 1vw;
  }

  @media (max-width: 780px) {
    span {
      font-size: 2.5vw;
    }
    div {
      max-width: 40ch;
      font-size: 2vw;
    }
  }
`;

function ProductFeature() {
  return (
    <Main>
      <Item>
        <box-icon name="recycle" size="5vw"></box-icon>
        <span>Say yes to refills</span>
        <div>
          Save money and make single-use water bottles a thing of the past
        </div>
      </Item>
      <Item>
        <box-icon name="droplet" size="5vw"></box-icon>
        <span>A smart way to sip</span>
        <div>
          PureVis™ and Nano Zero technology improves water quality for a
          brilliant hydration experience on the go.
        </div>
      </Item>
      <Item>
        <box-icon name="leaf" size="5vw"></box-icon>
        <span>Hydrate with purpose</span>
        <div>
          A portion of proceeds supports environmental and clean water projects
          worldwide.
        </div>
      </Item>
    </Main>
  );
}

export default ProductFeature;
