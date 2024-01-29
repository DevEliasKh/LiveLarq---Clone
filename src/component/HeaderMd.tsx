import styled, { keyframes } from "styled-components";
import { useState } from "react";

const Main = styled.header<{ $display?: string }>`
  @media (min-width: 1200px) {
    display: none;
  }

  @media (max-width: 780px) {
    display: none;
  }
  box-sizing: border-box;
  padding: 2vw;
  position: absolute;
  width: 100vw;
  background-color: #fff;
  z-index: 12;
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

const FadeInLeft = keyframes`
  0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

const Content = styled.div<{ $display?: string }>`
  display: ${(props) => props.$display};
  flex-direction: column;
  min-height: calc(100vh - 64px);
  max-height: fit-content;
  gap: 1vw;
  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    a {
      &:hover {
        color: gray;
      }
    }
  }

  .main-links {
    display: flex;
    flex-direction: column;
    gap: 1vw;
    font-size: 1.5vw;
  }

  .explore-btn,
  .gif-btn {
    width: fit-content;
    display: flex;
    border: 1px solid #153a5b;
    border-radius: 3rem;
    padding: 0.1vw 0.5vw;
    font-weight: 600;
    font-size: 1.5vw;
    display: flex;
    align-items: center;
    span {
      margin-right: 0.7vw;
      padding-left: 0.5vw;
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
      display: grid;
      grid-template: 1fr 1fr / 1fr;
      flex: 1 1 0px;
      position: relative;
    }

    .shadow {
      &::before {
        content: "";
        background: linear-gradient(
          360deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(255, 255, 255, 0) 50%
        );
        display: block;
        z-index: 0;
        height: 100%;
        position: relative;
        top: 0;
        left: 0;
        border-radius: 1rem;
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }

    .text {
      z-index: 10;
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 3;
      align-self: self-end;
      padding-bottom: 0.7vw;
      color: ${(props) => props.color};
      font-size: 1.1vw;
      > * {
        &:first-child {
          font-size: 1.5vw;
          font-weight: 500;
        }
      }
    }

    .purification {
      background-image: url(/assets/content_section-purification.webp);
      animation: ${FadeInLeft} 1s ease 0s 1 normal forwards;
    }

    .home {
      background-image: url(/assets/content_section-home.webp);
      animation: ${FadeInLeft} 1s ease 0s 1 normal forwards;
    }

    .drinkware {
      background-image: url(/assets/content_section-drinkware-others.webp);
      animation: ${FadeInLeft} 1s ease 0s 1 normal forwards;
    }
  }
`;

const NavBar = styled.nav<{ $display?: string }>`
  display: flex;
  justify-content: space-between;

  .menuIcon {
    display: ${(props) => (props.$display == "none" ? "flex" : "none")};
  }

  .xIcon {
    display: ${(props) => props.$display};
  }

  .icon {
    display: flex;
    gap: 1vw;
  }
`;

function HeaderMd() {
  const [iconDisplay, setIconDisplay] = useState("none");
  return (
    <Main>
      <NavBar $display={iconDisplay}>
        <div className="menuIcon" onClick={() => setIconDisplay("flex")}>
          <box-icon name="menu"></box-icon>
        </div>
        <div className="xIcon" onClick={() => setIconDisplay("none")}>
          <box-icon name="x"></box-icon>
        </div>
        <div>LARQ</div>
        <div className="icon">
          <box-icon name="cart"></box-icon>
          <box-icon name="user"></box-icon>
        </div>
      </NavBar>
      <Content $display={iconDisplay}>
        <div className="products">
          <div className="purification shadow">
            <div className="text">
              <div>Purification</div>
              <div>Filter or purify water on the go</div>
            </div>
          </div>
          <div className="home shadow">
            <div className="text">
              <div>Home</div>
              <div>Equip your home with Nano Zero filtration</div>
            </div>
          </div>
          <div className="drinkware shadow">
            <div className="text">
              <div>Drinkware</div>
              <div>Hydrate effortlessly on the go</div>
            </div>
          </div>
        </div>
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
            <a href="#">Technology</a>
            <a href="#">FAQ</a>
            <a href="">LogIn</a>
          </div>
        </div>
      </Content>
    </Main>
  );
}

export default HeaderMd;
