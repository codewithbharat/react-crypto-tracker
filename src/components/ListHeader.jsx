import React from "react";
import styled from "styled-components";
import { AiOutlineStar, AiOutlineDown } from "react-icons/ai";

const ListHeader = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Top 100 Cryptocurrencies by Market Cap</HeaderTitle>
        <ButtonGroup>
          <LeftButtons>
            <LeftBtnItems>
              <AiOutlineStar />
              Favourites
            </LeftBtnItems>
            <LeftBtnItems>Crypto Currencies</LeftBtnItems>
            <LeftBtnItems>DeFi</LeftBtnItems>
            <LeftBtnItems>NFTs & Collectibles</LeftBtnItems>
          </LeftButtons>
          <RightButtons>
            <RightBtnText>Show Rows</RightBtnText>
            <RightBtn>
              10
              <AiOutlineDown />
            </RightBtn>
          </RightButtons>
        </ButtonGroup>
      </Header>
    </Container>
  );
};

export default ListHeader;

const Container = styled.div`
  padding: 0 5%;
`;

const Header = styled.div`
  font-style: normal;
  font-weight: 700;
  color: #000000;
  border-bottom: 1px solid #eff2f5;
`;
const HeaderTitle = styled.h3``;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
`;
const LeftButtons = styled.div`
  display: flex;
  align-items: center;
`;
const LeftBtnItems = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  background: #eff2f5; ;
`;
const RightButtons = styled.div`
  display: flex;
  align-items: center;
`;

const RightBtnText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-right: 6px;
`;

const RightBtn = styled.div`
  background: #eff2f5;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  text-align: center;

  color: #000000;
`;
