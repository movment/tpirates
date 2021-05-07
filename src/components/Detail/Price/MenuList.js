import React from 'react';
import styled from 'styled-components';

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Size = styled.div``;
const Range = styled.div``;
const PriceLeft = styled.div`
  display: flex;
  & > div:first-child {
    font-size: 15px;
    font-weight: 600;
    color: #555555;
  }
  & > div:last-child {
    font-size: 13px;
    color: #777777;
  }
  & > div + div {
    margin-left: 6px;
  }
`;
const PriceRight = styled.div`
  color: #0e0e0e;
`;
const Description = styled.div`
  font-size: 13px;
  color: #777777;
`;
const ItemList = ({
  items = [
    {
      name: '프리미엄 활모듬회',
      list: [
        { size: '소', range: '2인', price: '45,000원' },
        { size: '중', range: '3인', price: '65,000원' },
      ],
      description: ['자연상 광어(국산)'],
    },
    {
      name: '프리미엄 계절모듬회',
      list: [
        { size: '소', range: '2인', price: '60,000원' },
        { size: '중', range: '3인', price: '80,000원' },
      ],
      description: ['대광어(완도산)', '위 이미지는 소 사이즈 입니다. '],
    },
    {
      name: '회',
      list: [
        { size: '중', range: '3인', price: '80,000원' },
        { size: '대', range: '4인', price: '100,000원' },
      ],
      description: ['자연상 광어(국산)'],
    },
  ],
}) => {
  return (
    <ItemWrapper>
      {items.map((item, index) => {
        return (
          <Item key={index}>
            <Top>
              <Name>{item.name}</Name>
              <Image src="//via.placeholder.com/350x200" alt="Menu" />
            </Top>
            <Bottom>
              <PriceWrapper>
                {item.list.map((cur, index) => (
                  <PriceItem key={index}>
                    <PriceLeft>
                      <Size>{cur.size}</Size>
                      <Range>{cur.range}</Range>
                    </PriceLeft>
                    <PriceRight>{cur.price}</PriceRight>
                  </PriceItem>
                ))}
                {item.description.map((cur, index) => {
                  return <Description key={index}>{cur}</Description>;
                })}
              </PriceWrapper>
            </Bottom>
          </Item>
        );
      })}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  padding: 13px 15px;
  background-color: #ffffff;
  & + & {
    margin-top: 20px;
  }
`;
const Name = styled.div`
  font-size: 15px;
  color: #555555;
  font-weight: 600;
`;
const Top = styled.div``;
const Image = styled.img`
  margin-top: 8px;
  width: 100%;
`;
const Bottom = styled.div``;

export default React.memo(ItemList);
