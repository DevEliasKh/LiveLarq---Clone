import styled from "styled-components";
import { useState } from "react";

const Main = styled.header`
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1vw;
  font-size: 0.8vw;
  font-weight: 500;
  padding: 0.5vw 2vw;
`;

const Li = styled.li`
  font-size: 1.5rem;
`;

const LiAnimated = styled.li`
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    transition: width 0.2s ease;
  }
  &:hover::after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background-color: #153a5b;
  }
`;

const Expanded = styled.div<{ $active?: string }>`
  display: flex;
  /* display: ${(props) => props.$active}; */
  padding: 0.5vw 2vw 2vw 2vw;
  box-sizing: border-box;
  align-self: self-start;
  width: 100vw;
  background-color: #fff;
  z-index: 10;
  height: 60vh;
  position: fixed;
  top: 3vw;
  gap: 15vw;
  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    a {
      font-weight: 300;
      &:hover {
        color: gray;
      }
    }
  }

  .main-links {
    display: flex;
    flex-direction: column;
    gap: 1vw;
  }

  .explore-btn,
  .gif-btn {
    width: fit-content;
    display: flex;
    border: 1px solid #153a5b;
    border-radius: 3rem;
    padding: 0.5vw;
    font-weight: 300;

    span {
      margin-right: 1rem;
    }
  }

  .gif-btn {
    background-color: #153a5b;
    color: #fff;
    box-icon {
      fill: white;
    }
    &:hover {
      color: #153a5b;
      background-color: #fff;
      box-icon {
        fill: #153a5b;
      }
    }
  }

  .learn-more {
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
    div {
      font-size: 12px;
      font-weight: 300;
      color: gray;
    }
  }

  .products {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    gap: 2vw;
    color: #fff;
    font-size: 14px;
    > * {
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex: 1 1 0px;
      &::after {
        content: "";
        background: linear-gradient(
          360deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(255, 255, 255, 0) 50%
        );
        z-index: 0;
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        top: 0;
        left: 0;
        border-radius: 1rem;
      }
    }

    .purification {
      background-image: url(/src/assets/content_section-purification.webp);
    }

    .home {
      background-image: url(/src/assets/content_section-home.webp);
    }

    .drinkware {
      background-image: url(/src/assets/content_section-drinkware-others.webp);
    }
  }
`;

function Header() {
  const [view, setView] = useState("none");

  return (
    <Main onMouseLeave={() => setView("none")}>
      <NavBar>
        <li>
          <NavBar>
            <LiAnimated onMouseEnter={() => setView("flex")}>
              SHOP ALL
            </LiAnimated>
            <LiAnimated>PURIFICATION</LiAnimated>
            <LiAnimated>HOME</LiAnimated>
            <LiAnimated>DRINKWARE</LiAnimated>
          </NavBar>
        </li>
        <Li>LARQ</Li>
        <li>
          <NavBar>
            <li>TECHNOLOGY</li>
            <li>FAQ</li>
            <li>
              <box-icon name="user"></box-icon>
            </li>
            <li>
              <box-icon name="cart"></box-icon>
            </li>
          </NavBar>
        </li>
      </NavBar>
      <Expanded $active={view}>
        <div className="links">
          <div className="main-links">
            <a href="#" className="explore-btn">
              <span>Explore all</span>
              <box-icon name="arrow-back" rotate="180"></box-icon>
            </a>
            <a href="#" className="gif-btn">
              <span>Gifts sets</span>
              <box-icon name="arrow-back" rotate="180"></box-icon>
            </a>
            <a>Filters & Accessories</a>
            <a>Corporate gifting</a>
          </div>
          <div className="learn-more">
            <div>LEARN MORE</div>
            <a>PureVis technology</a>
            <a>Nano Zero technology</a>
          </div>
        </div>
        <div className="products">
          <div className="purification">
            <div>Purification</div>
            <div>Filter or purify water on the go</div>
          </div>
          <div className="home">
            <div>Home</div>
            <div>Equip your home with Nano Zero filtration</div>
          </div>
          <div className="drinkware">
            <div>Drinkware</div>
            <div>Hydrate effortlessly on the go</div>
          </div>
        </div>
      </Expanded>
      <div />
    </Main>
  );
}

export default Header;
