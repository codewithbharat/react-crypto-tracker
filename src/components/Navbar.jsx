import React, { useState } from "react";
import styled from "styled-components";
import { TbCurrencyCent, TbSearch, TbMenu2 } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggel] = useState(false);

  const toggler = () => {
    setToggel(!toggle);
  };
  return (
    <div>
      <Container>
        <Logo
          style={{
            cursor: `pointer`,
          }}
        >
          <LogoIcon />
          <LogoTxt>crypto tracker</LogoTxt>
        </Logo>
        <Menu>
          <Search
            style={{
              cursor: `pointer`,
            }}
          />
          <BurgerMenu
            style={{
              cursor: `pointer`,
            }}
            onClick={() => toggler()}
          />
        </Menu>
      </Container>
      {toggle && (
        <Overlay onClick={() => toggler()}>
          <SideBar>
            <SideLinks
              style={{
                margin: `0`,
                marginLeft: `190px`,
              }}
              onClick={() => toggler()}
            >
              <AiOutlineClose />
            </SideLinks>
            <SideLinks
              style={{
                display: `flex`,
                alignItems: `center`,
              }}
            >
              <TbSearch />{" "}
              <span
                style={{
                  marginLeft: `5px`,
                  padding: `4px 10px`,
                  border: `1px solid black`,
                  borderRadius: `8px`,
                  color: `rgba(0, 0, 0, 0.5)`,
                }}
              >
                Search
              </span>
            </SideLinks>
            <SideLinks>Favourites</SideLinks>
            <SideLinks>Crypto Currencies</SideLinks>
            <SideLinks>DeFi</SideLinks>
            <SideLinks>NFTs & Collectibles</SideLinks>
          </SideBar>
        </Overlay>
      )}
    </div>
  );
};

export default Navbar;

const Overlay = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  z-index: 4;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const SideBar = styled.div`
  padding-top: 20px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px 1.47737px 17.7284px 4.43211px rgba(208, 214, 227, 0.3);
`;

const SideLinks = styled.div`
  margin: 10px 60px;
`;

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
