import styled from "styled-components";

const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1vw;
`;

function Header() {
  return (
    <>
      <NavBar>
        <li>
          <NavBar>
            <li>SHOP ALL</li>
            <li>PURIFICATION</li>
            <li>HOME</li>
            <li>DRINKWARE</li>
          </NavBar>
        </li>
        <li>LARQ</li>
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
    </>
  );
}

export default Header;
