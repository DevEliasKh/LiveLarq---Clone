import styled from "styled-components";

const Main = styled.main`
  background-image: url(/src/assets/NewYear_Website_Hero_2400x1200.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  width: 100vw;
  height: 93vh;

  box-sizing: border-box;
  padding: 1.5vw 2vw;

  display: flex;
  justify-content: space-between;
  align-items: end;

  &::after {
    content: "";
    background: linear-gradient(
      360deg,
      rgba(21, 58, 91, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    width: 100%;
    height: 93vh;
    display: block;
    z-index: 0;
    position: absolute;
    top: 7vh;
    left: 0;
  }
`;

const HeroText = styled.div`
  box-sizing: border-box;
  z-index: 10;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1vw;

  .medium-text {
    font-size: 1vw;
  }

  .xLarge-text {
    font-size: 3vw;
    font-weight: 900;
  }

  .large-text {
    font-size: 2vw;
    width: 40ch;
    text-align: left;
  }

  a {
    display: flex;
    color: rgb(21, 58, 91);
    text-decoration: none;
    background-color: #fff;
    border-radius: 1rem;
    font-weight: 600;
    padding: 0.5vw 1.5vw;
  }
`;

const HeroProductImg = styled.div`
  font-size: 1vw;
  display: flex;
  flex-direction: column;
  z-index: 10;
  background-color: #fff;
  width: 12vw;
  min-width: fit-content;
  height: 14vw;
  border-radius: 1rem;
  img {
    width: inherit;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

function Hero() {
  return (
    <Main>
      <HeroText>
        <div className="medium-text">Drink briliantly</div>
        <div className="xLarge-text">Poppin’ bottles in 2024</div>
        <div className="large-text">
          Forget the bubbly, smart water purification is here to help crush
          those hydration goals.
        </div>
        <a href="#">
          <span>Shop now</span>
          <box-icon name="right-arrow-alt"></box-icon>
        </a>
      </HeroText>
      <HeroProductImg>
        <img src="src/assets/BDMB050A.webp" alt="" />
        LARQ Bottle PureVls
      </HeroProductImg>
    </Main>
  );
}

export default Hero;
