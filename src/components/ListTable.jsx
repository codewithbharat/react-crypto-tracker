import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import _ from "lodash";
import axios from "axios";

const pageSize = 7;

const ListTable = () => {
  const [data, setData] = useState(null);
  const [paginatedData, setPaginatedData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d"
      )
      .then((res) => {
        setData(res.data);
        setPaginatedData(_(res.data).slice(0).take(pageSize).value());
      });
  }, []);

  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;

  if (pageCount === 1) {
    return null;
  }

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedData = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedData(paginatedData);
  };

  const pages = _.range(1, pageCount + 1);

  return !paginatedData ? (
    <>
      <Loading>Loading.....</Loading>
    </>
  ) : (
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
            {paginatedData.map((crypto, idx) => {
              return (
                <ListRow key={idx}>
                  {console.log(crypto)}
                  <ListDetails>
                    <Flex>
                      <AiOutlineStar /> {crypto.market_cap_rank}
                    </Flex>
                  </ListDetails>
                  <ListDetails>
                    <Flex>
                      <Logo src={crypto.image} />
                      {crypto.name}
                      <LogoSym>{crypto.symbol}</LogoSym>
                    </Flex>
                  </ListDetails>
                  <ListDetails>
                    $
                    {crypto.current_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </ListDetails>
                  <ListDetails>
                    <Wrap24H>
                      <RiArrowDownSFill />
                      {crypto.price_change_percentage_24h_in_currency.toFixed(
                        2
                      )}
                      %
                    </Wrap24H>
                  </ListDetails>
                  <ListDetails>
                    <Wrap7D>
                      <RiArrowUpSFill />
                      {crypto.price_change_percentage_7d_in_currency.toFixed(2)}
                      %
                    </Wrap7D>
                  </ListDetails>
                  <ListDetails>
                    $
                    {crypto.market_cap
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </ListDetails>
                  <ListDetails>
                    $
                    {crypto.total_volume
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <br />
                    <span
                      style={{
                        letterSpacing: `-0.035em`,
                        color: `#000000`,
                        fontWeight: `400`,
                        opacity: `0.5`,
                      }}
                    >
                      932,071 BTC
                    </span>
                  </ListDetails>
                  <ListDetails>
                    {Math.ceil(crypto.circulating_supply)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    BTC
                    <CirDivWrap>
                      <Cirdiv></Cirdiv>
                    </CirDivWrap>
                  </ListDetails>
                  <ListDetails>
                    <BsThreeDotsVertical />
                  </ListDetails>
                </ListRow>
              );
            })}
          </tbody>
        </List>
        <NavPage>
          <Pages>
            {pages.map((page) => (
              <PageNo
                style={
                  page === currentPage
                    ? { border: `1px solid #115bb6` }
                    : { border: `1px solid #dfe3e8` }
                }
                onClick={() => pagination(page)}
              >
                {page}
              </PageNo>
            ))}
          </Pages>
        </NavPage>
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
            {paginatedData.map((crypto, idx) => {
              return (
                <ListRow key={idx}>
                  <ListDetails>
                    <Flex>
                      <Logo src={crypto.image} />
                      {crypto.name}
                      <LogoSym>{crypto.symbol}</LogoSym>
                    </Flex>
                  </ListDetails>
                  <ListDetails>
                    $
                    {crypto.current_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </ListDetails>
                  <ListDetails>
                    <Wrap24H>
                      <RiArrowDownSFill />
                      {crypto.price_change_percentage_24h_in_currency.toFixed(
                        2
                      )}
                      %
                    </Wrap24H>
                  </ListDetails>
                </ListRow>
              );
            })}
          </tbody>
        </List>
        <NavPage>
          <Pages>
            {pages.splice(0, 10).map((page) => (
              <PageNo
                style={
                  page === currentPage
                    ? { border: `1px solid #115bb6` }
                    : { border: `1px solid #dfe3e8` }
                }
                onClick={() => pagination(page)}
              >
                {page}
              </PageNo>
            ))}
          </Pages>
        </NavPage>
      </MobView>
    </>
  );
};

export default ListTable;

const NavPage = styled.div`
  padding: 0 10%;
  @media (max-width: 768px) {
    padding: 0 5%;
  }
  display: felx;
  justify-content: end;
`;
const Pages = styled.ul`
  list-style: none;
  display: flex;
`;
const PageNo = styled.li`
  padding: 5px;
  margin-right: 5px;
  border-radius: 4px;
`;

const Loading = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const WebView = styled.div`
  overflow-x: auto;
  padding: 0 5%;
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
  font-size: 14px;
`;
const ListRow = styled.tr``;
const ListTitle = styled.th`
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
`;
const ListDetails = styled(ListTitle)``;
const Logo = styled.img`
  height: 24px;
  width: 24px;
  margin: 10px;
`;

const LogoSym = styled.span`
  text-transform: uppercase;
  font-weight: 400;
  padding: 5px;
  color: #808a9d;
`;

const Wrap24H = styled.span`
  display: felx;
  color: #ea3943;
`;

const Wrap7D = styled.span`
  color: #16c784;
`;

const CirDivWrap = styled.div`
  height: 8px;
  width: 60%;
  background: #eff2f5;
  border-radius: 4px;
`;

const Cirdiv = styled.div`
  height: 8px;
  width: 60%;
  border-radius: 4px;
  background: #cfd6e4;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
`;
