import styled from "styled-components";
import { useState } from "react";

const Main = styled.main<{ $display?: string }>`
  @media (min-width: 780px) {
    display: none;
  }
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: calc(100vh - 64px);
  background-color: #fff;
  z-index: 12;
`;

function HeaderSm() {
  const [menuDisplay, setMenuDisplay] = useState("none");
  return (
    <Main>
      <div>
        <div>Purification</div>
        <div>Home</div>
        <div>DrinkWare</div>
        <div>Gifts sets</div>
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
