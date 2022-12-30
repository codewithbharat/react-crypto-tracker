import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

const ListTable = () => {
  const fetchData = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <WebView>
        <List>
          <thead>
            <ListRow>
              <ListTitle>#</ListTitle>
              <ListTitle>Name</ListTitle>
              <ListTitle>Price</ListTitle>
              <ListTitle>24H</ListTitle>
              <ListTitle>7D</ListTitle>
              <ListTitle>Market Cap</ListTitle>
              <ListTitle>Volume(24H)</ListTitle>
              <ListTitle>Circulating Supply</ListTitle>
            </ListRow>
          </thead>
          <tbody>
            {data.splice(0, 10).map((crypto, idx) => {
              return (
                <ListRow key={idx}>
                  {console.log(crypto)}
                  <ListDetails>
                    <Flex>
                      <AiOutlineStar /> {idx + 1}
                    </Flex>
                  </ListDetails>
                  <ListDetails>
                    <Flex>
                      <Logo src={crypto.image} />
                      {crypto.name}
                    </Flex>
                  </ListDetails>
                  <ListDetails>${crypto.current_price}</ListDetails>
                  <ListDetails>
                    {crypto.price_change_percentage_24h_in_currency.toFixed(2)}%
                  </ListDetails>
                  <ListDetails>
                    {crypto.price_change_percentage_7d_in_currency.toFixed(2)}%
                  </ListDetails>
                  <ListDetails>${crypto.market_cap}</ListDetails>
                  <ListDetails>${crypto.total_volume}</ListDetails>
                  <ListDetails>{crypto.circulating_supply} BTC</ListDetails>
                </ListRow>
              );
            })}
          </tbody>
        </List>
      </WebView>
      <MobView>
        <List>
          <thead>
            <ListRow>
              <ListTitle>Name</ListTitle>
              <ListTitle>Price</ListTitle>
              <ListTitle>24H</ListTitle>
            </ListRow>
          </thead>
          <tbody>
            {data.splice(0, 10).map((crypto, idx) => {
              return (
                <ListRow key={idx}>
                  <ListDetails>
                    <Flex>
                      <Logo src={crypto.image} />
                      {crypto.name}
                    </Flex>
                  </ListDetails>
                  <ListDetails>${crypto.current_price}</ListDetails>
                  <ListDetails>
                    {crypto.price_change_percentage_24h_in_currency.toFixed(2)}%
                  </ListDetails>
                </ListRow>
              );
            })}
          </tbody>
        </List>
      </MobView>
    </>
  );
};

export default ListTable;

const WebView = styled.div`
  overflow-x: auto;
  padding: 0 10%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobView = styled.div`
  overflow-x: auto;
  padding: 0 5%;
  @media (min-width: 768px) {
    display: none;
  }
`;
const List = styled.table`
  width: 100%;
  font-size: 12px;
`;
const ListRow = styled.tr``;
const ListTitle = styled.th`
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
`;
const ListDetails = styled.td`
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
`;
const Logo = styled.img`
  height: 24px;
  width: 24px;
  margin: 10px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;
