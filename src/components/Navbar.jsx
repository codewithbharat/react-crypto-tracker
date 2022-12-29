import React from "react";
import styled from "styled-components";
import { TbCurrencyCent, TbSearch, TbMenu2 } from "react-icons/tb";

const Navbar = () => {
  return (
    <div>
      <Container>
        <Logo>
          <LogoIcon />
          <LogoTxt>crypto tracker</LogoTxt>
        </Logo>
        <Menu>
          <Search />
          <BurgerMenu />
        </Menu>
      </Container>
    </div>
  );
};

export default Navbar;

const Container = styled.div`
  height: 59px;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: start;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const LogoIcon = styled(TbCurrencyCent)`
  width: 40px;
  height: 40px;
`;

const LogoTxt = styled.span`
  font-weight: 600;
  text-transform: capitalize;
  font-size: 25px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;
const Search = styled(TbSearch)`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const BurgerMenu = styled(TbMenu2)`
  width: 40px;
  height: 40px;
`;
