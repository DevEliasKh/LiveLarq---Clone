import styled from "styled-components";
import { useState } from "react";

const Main = styled.header`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2vw;
  font-size: 0.7vw;
  font-weight: 600;
  padding: 0.5vw 2vw;
`;

const Li = styled.li`
  font-size: 1.5vw;
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
  display: ${(props) => props.$active};
  padding: 0.5vw 2vw 2vw 2vw;
  box-sizing: border-box;
  align-self: self-start;
  width: 100vw;
  background-color: #fff;
  z-index: 10;
  height: 26vw;
  min-height: fit-content;
  position: fixed;
  top: 3vw;
  gap: 10vw;
  font-size: 0.89vw;

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
  }

  .explore-btn,
  .gif-btn {
    width: fit-content;
    display: flex;
    border: 1px solid #153a5b;
    border-radius: 3rem;
    padding: 0.5vw;
    font-weight: 600;
    font-size: 0.8vw;
    display: flex;
    align-items: center;
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
      background-position: 50% 300%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 1rem;
      display: grid;
      grid-template: 1fr 1fr / 1fr;
      flex: 1 1 0px;
    }

    .bgCenter {
      background-position: 50% 50%;
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

    .bgColor {
      background-color: #f5f6fa;
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

    .bottlePure {
      background-image: url(/assets/p1-mb-17-2-white-q.webp);
    }

    .bottleMovement {
      background-image: url(/assets/p2-bo-24-2-white-q.webp);
    }

    .bottleFiltered {
      background-image: url(/assets/filtered-17-ob-3.webp);
    }

    .pitcherBlue {
      background-image: url(/assets/PAMB190A.webp);
    }

    .pitcherWhite {
      background-image: url(/assets/PAPW190A.webp);
    }

    .swigTop {
      background-image: url(/assets/BNWGW068A.webp);
    }

    .flipTop {
      background-image: url(/assets/BNSOB050A.webp);
    }

    .twistTop {
      background-image: url(/assets/BNDMB050A.webp);
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
      font-size: 0.7vw;
      > * {
        &:first-child {
          font-size: 1.1vw;
          font-weight: 500;
        }
      }
    }
  }
`;

function Header() {
  const [viewSubMenu, setViewSubMenu] = useState({
    shopAll: "none",
    purification: "none",
    home: "none",
    drinkware: "none",
  });

  return (
    <Main
      onMouseLeave={() =>
        setViewSubMenu({
          shopAll: "none",
          purification: "none",
          home: "none",
          drinkware: "none",
        })
      }
    >
      <NavBar>
        <li>
          <NavBar>
            <LiAnimated
              onMouseEnter={() =>
                setViewSubMenu({
                  shopAll: "flex",
                  purification: "none",
                  home: "none",
                  drinkware: "none",
                })
              }
            >
              SHOP ALL
            </LiAnimated>
            <LiAnimated
              onMouseEnter={() =>
                setViewSubMenu({
                  shopAll: "none",
                  purification: "flex",
                  home: "none",
                  drinkware: "none",
                })
              }
            >
              PURIFICATION
            </LiAnimated>
            <LiAnimated
              onMouseEnter={() =>
                setViewSubMenu({
                  shopAll: "none",
                  purification: "none",
                  home: "flex",
                  drinkware: "none",
                })
              }
            >
              HOME
            </LiAnimated>
            <LiAnimated
              onMouseEnter={() =>
                setViewSubMenu({
                  shopAll: "none",
                  purification: "none",
                  home: "none",
                  drinkware: "flex",
                })
              }
            >
              DRINKWARE
            </LiAnimated>
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
      {/* shop all */}
      <Expanded $active={viewSubMenu.shopAll}>
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
          <div className="purification bgCenter shadow">
            <div className="text">
              <div>Purification</div>
              <div>Filter or purify water on the go</div>
            </div>
          </div>
          <div className="home bgCenter shadow">
            <div className="text">
              <div>Home</div>
              <div>Equip your home with Nano Zero filtration</div>
            </div>
          </div>
          <div className="drinkware bgCenter shadow">
            <div className="text">
              <div>Drinkware</div>
              <div>Hydrate effortlessly on the go</div>
            </div>
          </div>
        </div>
      </Expanded>
      {/* purification */}
      <Expanded $active={viewSubMenu.purification} color="#153a5b">
        <div className="links">
          <div className="main-links">
            <a href="#" className="explore-btn">
              <span>Explore Purification</span>
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
          <div className="bottlePure bgColor">
            <div className="text">
              <div>LARQ Bottle PureVls</div>
              <div>FROM $109</div>
            </div>
          </div>
          <div className="bottleMovement bgColor">
            <div className="text">
              <div>LARQ Bottle Movement PureVis™</div>
              <div>FROM $99</div>
            </div>
          </div>
          <div className="bottleFiltered bgColor">
            <div className="text">
              <div>LARQ Bottle Filtered</div>
              <div>FROM $49.95</div>
            </div>
          </div>
        </div>
      </Expanded>
      {/* Home */}
      <Expanded $active={viewSubMenu.home} color="#153a5b">
        <div className="links">
          <div className="main-links">
            <a href="#" className="explore-btn">
              <span>Explore Home</span>
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
          <div className="pitcherBlue bgColor">
            <div className="text">
              <div>LARQ Pitcher PureVis™</div>
              <div>From €139</div>
            </div>
          </div>
          <div className="pitcherWhite bgColor">
            <div className="text">
              <div>LARQ Pitcher PureVis™</div>
              <div>From €139</div>
            </div>
          </div>
          <div className="">
            <div className="text">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </Expanded>
      {/* drinkware */}
      <Expanded $active={viewSubMenu.drinkware} color="#153a5b">
        <div className="links">
          <div className="main-links">
            <a href="#" className="explore-btn">
              <span>Explore Drinkware</span>
              <box-icon name="arrow-back" rotate="180"></box-icon>
            </a>
            <a href="#" className="gif-btn">
              <span>Gifts sets</span>
              <box-icon name="arrow-back" rotate="180"></box-icon>
            </a>
            <a>Accessories</a>
            <a>Corporate gifting</a>
          </div>
          <div className="learn-more">
            <div>LEARN MORE</div>
            <a>PureVis technology</a>
            <a>Nano Zero technology</a>
          </div>
        </div>
        <div className="products">
          <div className="swigTop bgColor">
            <div className="text">
              <div>LARQ Bottle Swig Top</div>
              <div>From €35</div>
            </div>
          </div>
          <div className="flipTop bgColor">
            <div className="text">
              <div>LARQ Bottle Flip Top</div>
              <div>From €39.95</div>
            </div>
          </div>
          <div className="twistTop bgColor">
            <div className="text">
              <div>LARQ Bottle Twist Top</div>
              <div>From €44.95</div>
            </div>
          </div>
        </div>
      </Expanded>
    </Main>
  );
}

export default Header;
