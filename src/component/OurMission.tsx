import { useState } from "react";
import styled from "styled-components";

const Main = styled.main<{ $showMore?: boolean }>`
  background-image: url(public/assets/our_mission.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  height: 95vh;
  padding: 5vw;
  padding-right: 0;
  box-sizing: border-box;

  color: white;

  display: flex;
  justify-content: space-between;
  align-items: end;

  position: relative;
  top: 0;
  left: 0;

  overflow: hidden;

  &::before {
    content: "";
    background: linear-gradient(
      360deg,
      rgba(21, 58, 91, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    width: 100%;
    height: 95vh;
    display: block;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .cards {
    align-self: center;

    z-index: 10;

    display: flex;
    gap: 1vw;

    position: relative;
    left: 15%;
    padding: 1vw;

    transition: left 1s;

    &:hover {
      left: ${(props) => (!props.$showMore ? "10%" : "")};
    }

    left: ${(props) => (props.$showMore ? "-20%" : "")};
  }
`;

const Info = styled.section<{ $showMore?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2vw;
  z-index: 10;
  position: relative;
  left: 0;
  left: ${(props) => (props.$showMore ? "-40%" : "")};
  transition: left 1s;
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  h1 {
    font-size: 5rem;
    font-weight: 800;
  }

  p {
    max-width: 50ch;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 300;
  }
  .btns {
    display: flex;
    button {
      border: none;
      padding: 0.5vw 1vw;
      border-radius: 2rem;
      font-size: 1.1rem;
      display: flex;
      gap: 1vw;
    }

    .backBtn {
      background-color: transparent;
      border: 2px solid white;
      color: white;
      position: relative;
      right: ${(props) => (props.$showMore ? "-200%" : "150%")};
      transition: all 1s;
    }
  }
`;

const Card = styled.section<{ $img?: string }>`
  background-image: url(public/assets/${(props) => props.$img}.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  text-align: left;
  gap: 1vw;

  box-sizing: border-box;
  padding: 1vw;
  height: 50vh;
  width: 40ch;
  position: relative;
  &::before {
    content: "";
    background: linear-gradient(
      360deg,
      #153a5ba0 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    width: 40ch;
    height: 50vh;
    display: block;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  > * {
    position: relative;
    top: 10%;
    transition: top 1s;
  }

  h1 {
    z-index: 10;
    font-size: 1.2rem;
    font-weight: 600;
  }

  div {
    z-index: 10;
    font-weight: 300;
  }

  button {
    display: flex;
    opacity: 0;
    justify-content: center;
    align-items: center;
    gap: 5px;
    z-index: 10;
    border: none;
    border-radius: 2rem;
    padding: 0.5vw;
    font-size: 0.9rem;
    font-weight: 600;
    color: #153a5b;
    position: relative;
    transition: all 1s;
  }

  &:hover {
    button {
      display: flex;
      top: 0;
      opacity: 1;
    }
    > * {
      top: 0;
    }
  }
`;

function OurMission() {
  const [showMore, setShowMore] = useState(false);
  function clickHandler() {
    setShowMore(!showMore);
  }
  return (
    <Main $showMore={showMore}>
      <Info $showMore={showMore}>
        <h2>Our mission</h2>
        <h1>Drink brilliantly</h1>
        <p>
          We make it easy to opt for the healthier and more sustainable
          hydration choice, anytime and anywhere.
        </p>
        <div className="btns">
          <button onClick={() => clickHandler()}>
            <span>Learn more</span>
            <box-icon name="arrow-back" rotate="180" color="gray"></box-icon>
          </button>
          <button onClick={() => setShowMore(false)} className="backBtn">
            <span>Back</span>
            <box-icon name="arrow-back" color="white"></box-icon>
          </button>
        </div>
      </Info>
      <div className="cards" onClick={() => clickHandler()}>
        <Card $img="mission-1">
          <h1>Award winning design</h1>
          <div>When it comes to form and function, we’ve got it down.</div>
          <button>
            <span>Shop now</span>
            <box-icon name="arrow-back" rotate="180" color="gray"></box-icon>
          </button>
        </Card>
        <Card $img="mission-2">
          <h1>The future of hydration</h1>
          <div>
            PureVis™ and Nano Zero technology improves water quality for a
            brilliant hydration experience.
          </div>
          <button>
            <span>How it works</span>
            <box-icon name="arrow-back" rotate="180" color="gray"></box-icon>
          </button>
        </Card>
        <Card $img="mission-3">
          <h1>Better for you and the planet</h1>
          <div>
            A portion of every purchase helps restore our oceans and brings
            clean water to communities in need.
          </div>
          <button>
            <span>Measure my impact</span>
            <box-icon name="arrow-back" rotate="180" color="gray"></box-icon>
          </button>
        </Card>
      </div>
    </Main>
  );
}

export default OurMission;
