import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const SliderTop = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const content = [
    {
      id: `1`,
      title: `Take a quiz!`,
      desc: `Learn and earn $CKB`,
    },
    {
      id: `2`,
      title: `Portfolio 🔥`,
      desc: `Track your trades in one place, not all over the place`,
    },
    {
      id: `3`,
      title: `Portfolio`,
      desc: `Track your trades in one place, not all over the place`,
    },
  ];
  return (
    <div className="SliderTop">
      <Carousel breakPoints={breakPoints}>
        {content.map((data, idx) => (
          <Item key={idx}>{data.title}</Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderTop;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 100%;
  margin: 0 15px;
  background: #ffffff;
  box-shadow: 0px 1.47737px 17.7284px 4.43211px rgba(208, 214, 227, 0.3);
  border-radius: 12px;
`;
