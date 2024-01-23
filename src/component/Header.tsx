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
  /* display: none; */
  display: ${(props) => props.$active};
  padding: 0.5vw 2vw;
  box-sizing: border-box;
  align-self: self-start;
  width: 100vw;
  background-color: #fff;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  height: 50vh;
  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
  }

  .main-links {
    display: flex;
    flex-direction: column;
  }

  .products {
    display: flex;
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
            <a href="#">Explore all</a>
            <a href="#">Gifts sets</a>
            <div>Filters & Accessories</div>
            <div>Corporate gifting</div>
          </div>
          <div className="learn-more">
            <div>LEARN MORE</div>
            <div>PureVis technology</div>
            <div>Nano Zero technology</div>
          </div>
        </div>
        <div className="products">
          <div>
            <img src="" alt="" />
            <div>Purification</div>
            <div>Filter or purify water on the go</div>
          </div>
          <div>
            <img src="" alt="" />
            <div>Home</div>
            <div>Equip your home with Nano Zero filtration</div>
          </div>
          <div>
            <img src="" alt="" />
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
