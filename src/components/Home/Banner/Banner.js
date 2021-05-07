import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { bannerData } from '../../../json/demo_data';

const Banner = () => {
  const [num, setNum] = useState(0);
  const [clicked, setClicked] = useState(false);

  const onClick = useCallback(() => {
    setClicked((clicked) => !clicked);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setNum((num) => (num + 1) % bannerData.length);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Wrapper>
      <StyledUl>
        {bannerData.map(({ label, price }, index) => (
          <StyledList
            key={index}
            cur={clicked || index === num}
            onClick={onClick}
          >{`${label} ${price}`}</StyledList>
        ))}
      </StyledUl>
      <Button onClick={onClick}>
        {clicked ? <UpOutlined /> : <DownOutlined />}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #1c79bc;
  color: #ffffff;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
const StyledList = styled.li`
  display: ${({ cur }) => (cur ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export default Banner;
