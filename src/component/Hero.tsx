import styled from "styled-components";

const Main = styled.main`
  background-image: url(/src/assets/NewYear_Website_Hero_2400x1200.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  width: 100vw;
  height: 93vh;

  box-sizing: border-box;
  padding: 5vw;

  display: flex;
  justify-content: space-between;
  align-items: end;

  &::after {
    content: "";
    background: linear-gradient(
      360deg,
      rgba(21, 58, 91, 0.9948354341736695) 0%,
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
`;

const HeroProductImg = styled.div`
  z-index: 10;
`;

function Hero() {
  return (
    <Main>
      <HeroText>
        <div>Drink briliantly</div>
        <div>Poppin’ bottles in 2024</div>
        <div>
          Forget the bubbly, smart water purification is here to help crush
          those hydration goals.
        </div>
      </HeroText>
      <HeroProductImg>LARQ Bottle PureVls</HeroProductImg>
    </Main>
  );
}

export default Hero;
