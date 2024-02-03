import styled from "styled-components";

const Main = styled.main`
  box-sizing: border-box;
  padding: 3vw;
  display: flex;
  justify-content: space-between;
  gap: 5vw;

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

const ReviewSum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1vw;

  @media (max-width: 1440px) {
    flex-direction: row;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5vw;
  }

  .title {
    font-size: 3vw;
    font-weight: 600;
  }

  * {
    &:nth-child(3) {
      color: gray;
      font-weight: 300;
    }
  }

  .reviewBtn {
    display: flex;
    gap: 0.3vw;
    border: 1px solid gray;
    border-radius: 2rem;
    padding: 0.5vw 0.7vw;
    transition: all 0.5s ease-in-out;

    &:hover {
      padding: 0.5vw 1vw;
      gap: 0.5vw;
    }
  }
`;

const ReviewDetail = styled.div`
  display: flex;
  width: 100%;
  gap: 1vw;
  overflow-x: scroll;

  > * {
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 1vw;
    padding: 1vw;
    text-align: left;
    border-radius: 1rem;
    > * {
      &:first-child {
        font-size: 1.3rem;
        min-width: 20ch;
      }
    }
  }
`;

function Review() {
  return (
    <Main>
      <ReviewSum>
        <div className="main">
          <div className="title">Brilliant</div>
          <div className="stars">
            <box-icon type="solid" name="star" color="#F3756D"></box-icon>
            <box-icon type="solid" name="star" color="#F3756D"></box-icon>
            <box-icon type="solid" name="star" color="#F3756D"></box-icon>
            <box-icon type="solid" name="star" color="#F3756D"></box-icon>
            <box-icon type="solid" name="star" color="#F3756D"></box-icon>
          </div>
          <div>based on 10964 reviews</div>
        </div>
        <a className="reviewBtn">
          <span>All reviews</span>
          <box-icon name="arrow-back" rotate="180" color="gray"></box-icon>
        </a>
      </ReviewSum>
      <ReviewDetail>
        <div>
          <div>
            What’s the Next Status Water Bottle? Three of our experts named the
            LARQ bottle as one to watch.
          </div>
          <div>Strategist</div>
        </div>
        <div>
          <div>
            The result is that every glass of water tastes crisp and fresh
          </div>
          <div>THE OPRAN MAGAZINE</div>
        </div>
        <div>
          <div>
            Easier to drink through the straw than other water filter bottles.
          </div>
          <div>GOOD HOUSEKEEPING</div>
        </div>
        <div>
          <div>
            You Should Ditch Your Old Water Dispenser For The High-Tech LARQ
            Pitcher PureVis™.
          </div>
          <div>BEST PRODUCTS</div>
        </div>
      </ReviewDetail>
    </Main>
  );
}

export default Review;
