import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import styled from 'styled-components';
import Option from './Option';

const lists = ['모든 지역', '모든 품목', '기본 순'];

const Filter = () => {
  const [clicked, setClicked] = useState('');

  const handleClick = (name) => {
    return () => {
      setClicked((clicked) => (clicked === name ? '' : name));
    };
  };

  return (
    <Wrapper>
      <NavWrapper>
        {lists.map((list, index) => (
          <Nav
            key={index}
            clicked={!clicked || clicked === list}
            onClick={handleClick(list)}
            setClicked={setClicked}
          >
            {list}
            <DownOutlined />
          </Nav>
        ))}
      </NavWrapper>
      <Option clicked={clicked} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #dddddd;
`;
const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  flex: 1;
  cursor: pointer;
  background-color: ${({ clicked }) => (clicked ? '#ffffff' : '#eeeeee')};
  color: ${({ clicked }) => (clicked ? '#1c79bc' : '#777777')};
  font-weight: 600;

  & > span {
    margin-left: 4px;
    font-size: 8px;
  }
  & + & {
    border-left: 1px solid #dddddd;
  }
`;

export default Filter;
