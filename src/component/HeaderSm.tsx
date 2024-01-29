import styled from "styled-components";
import { useState } from "react";

const Main = styled.main<{ $display?: string }>`
  @media (min-width: 780px) {
    display: none;
  }
  box-sizing: border-box;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  max-height: fit-content;
  gap: 2vw;
  background-color: #fff;
  z-index: 13;
  position: absolute;

  .product {
    display: ${(props) => props.$display};

    flex-direction: column;
    gap: 1vw;
    padding-top: 1vw;
  }
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
    display: ${(props) => props.$display};

    flex-direction: column;
    align-items: start;
    gap: 2vw;
    font-size: 2vw;
    font-weight: 600;
  }

  .explore-btn {
    width: fit-content;
    display: flex;
    border: 1px solid #153a5b;
    border-radius: 3rem;
    padding: 0.5vw 1vw;
    font-weight: 600;
    font-size: 2vw;
    display: flex;
    align-items: center;
    span {
      margin-right: 0.7vw;
      padding-left: 0.5vw;
    }
  }
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid #000; */
  border-radius: 1rem;
  background-color: #ebf3f9;
  .text {
    display: flex;
    flex-direction: column;
    align-items: start;
    box-sizing: border-box;
    justify-content: center;
    gap: 2vw;
    padding: 0 2vw;
    font-size: 0.75rem;
    > * {
      &:first-child {
        font-size: 2.5vw;
        font-weight: 700;
        color: #153a5b;
      }
    }
  }

  .bg {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1rem;
    width: 25vw;
    height: 25vh;
  }

  .purification {
    background-image: url(/assets/content_section-purification.webp);
  }

  .home {
    background-image: url(/assets/content_section-home.webp);
  }

  .drinkware {
    background-image: url(/assets/content_section-drinkware-others.webp);
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

function HeaderSm() {
  const [menuDisplay, setMenuDisplay] = useState("none");
  return (
    <Main $display={menuDisplay}>
      <NavBar $display={menuDisplay}>
        <div className="menuIcon" onClick={() => setMenuDisplay("flex")}>
          <box-icon name="menu"></box-icon>
        </div>
        <div className="xIcon" onClick={() => setMenuDisplay("none")}>
          <box-icon name="x"></box-icon>
        </div>
        <div>LARQ</div>
        <div className="icon">
          <box-icon name="cart"></box-icon>
          <box-icon name="user"></box-icon>
        </div>
      </NavBar>
      <div className="product">
        <Product>
          <div className="text">
            <div>Purification</div>
            <div>Filter or purify water on the go</div>
          </div>
          <div className="purification bg"></div>
        </Product>
        <Product>
          <div className="text">
            <div>Home</div>
            <div>Equip your home with Nano Zero filtration</div>
          </div>
          <div className="home bg"></div>
        </Product>
        <Product>
          <div className="text">
            <div>DrinkWare</div>
            <div>Hydrate effortlessly on the go</div>
          </div>
          <div className="drinkware bg"></div>
        </Product>
        <Product>
          <div className="text">
            <div>Gits sets</div>
            <div>Bundle up and save!</div>
          </div>
          <div className="drinkware bg"></div>
        </Product>
      </div>
      <div className="main-links">
        <a href="#" className="explore-btn">
          <span>Explore all</span>
          <box-icon name="arrow-back" rotate="180"></box-icon>
        </a>
        <a>Filters & Accessories</a>
        <a>Corporate gifting</a>
        <a href="#">Technology</a>
        <a href="#">FAQ</a>
        <a href="">LogIn</a>
      </div>
    </Main>
  );
}

export default HeaderSm;
