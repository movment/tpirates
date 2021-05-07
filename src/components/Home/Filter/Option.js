import React from 'react';
import styled from 'styled-components';
import { zoneData, itemData } from '../../../json/demo_data';

const Option = ({ clicked }) => {
  // scroll visible but disabled
  // with html overflow-y: visible
  // useEffect(() => {
  //   const body = document.querySelector('body');
  //   if (clicked) {
  //     body.style.overflow = 'hidden';
  //     // body.style.height = '100vh';
  //   }
  //   return () => {
  //     body.style.overflow = 'visible';
  //     body.style.height = null;
  //   };
  // }, [clicked]);

  if (clicked === '모든 지역')
    return (
      <Wrapper clicked={clicked}>
        {zoneData.map((zone, index) => (
          <Item key={index}>{zone.label}</Item>
        ))}
      </Wrapper>
    );

  if (clicked === '모든 품목')
    return (
      <Wrapper clicked={clicked}>
        {itemData.map((item, index) => (
          <Item key={index}>{item.label}</Item>
        ))}
      </Wrapper>
    );

  if (clicked === '기본 순')
    return (
      <Wrapper clicked={clicked}>
        {['기본 순', '인기 순', '최근 본 가게'].map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </Wrapper>
    );

  return null;
};

const Wrapper = styled.div`
  display: ${({ clicked }) => (clicked ? 'flex' : 'none')};
  flex-wrap: wrap;
  background-color: white;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 140px;
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  font-size: 15px;
  color: #777777;
  cursor: pointer;
`;

export default React.memo(Option);
