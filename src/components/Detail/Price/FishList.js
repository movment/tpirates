import React from 'react';
import styled from 'styled-components';
import FishItem from './FishItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FishList = ({
  fishs = [
    {
      name: '광어',
      origin: '완도/양식',
      weight: '1kg 당',
      lists: [
        { size: '중', price: '35,000원' },
        { size: '대', price: '40,000원' },
      ],
    },
    {
      name: '우럭',
      origin: '국산/양식',
      weight: '1kg 당',
      lists: [
        { size: '중', price: '35,000원' },
        { size: '대', price: '40,000원' },
      ],
    },
  ],
}) => {
  return (
    <Wrapper>
      {fishs.map((fish, index) => {
        return <FishItem key={index} fish={fish} />;
      })}
    </Wrapper>
  );
};

export default React.memo(FishList);
