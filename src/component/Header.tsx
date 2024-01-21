import styled from "styled-components";

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

function Header() {
  return (
    <NavBar>
      <li>
        <NavBar>
          <LiAnimated>SHOP ALL</LiAnimated>
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
  );
}

export default Header;
