import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 10px 15px;
`;
const Left = styled.div``;
const Image = styled.img`
  width: 65px;
  height: 65px;
`;
const Right = styled.div`
  margin-left: 10px;
  width: 100%;
`;
const RTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RTLeft = styled.div`
  display: flex;
`;
const RTRight = styled.div``;
const RBItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
const T5 = styled.div`
  font-size: 15px;
  color: #555555;
  font-weight: 600;
`;
const T7 = styled.div`
  font-size: 14px;
  color: #777777;
`;
const T9 = styled.div`
  font-size: 14px;
  color: #999999;
`;
const RBottom = styled.div`
  margin-top: 10px;
`;

const FishItem = ({ fish: { name, origin, lists, weight } }) => {
  return (
    <Wrapper>
      <Left>
        <Image src="//via.placeholder.com/65x65" alt="Fish" />
      </Left>
      <Right>
        <RTop>
          <RTLeft>
            <T5>{name}</T5>
            <T9>{origin}</T9>
          </RTLeft>
          <RTRight>
            <T7>{weight}</T7>
          </RTRight>
        </RTop>
        <RBottom>
          {lists.map(({ size, price }, index) => {
            return (
              <RBItem key={index}>
                <div>{size}</div>
                <div>{price}</div>
              </RBItem>
            );
          })}
        </RBottom>
      </Right>
    </Wrapper>
  );
};

export default React.memo(FishItem);
