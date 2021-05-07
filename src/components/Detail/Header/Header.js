import { ArrowLeftOutlined, EyeOutlined } from '@ant-design/icons';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Header = ({ title, view }) => {
  const history = useHistory();
  const onClick = useCallback(() => {
    history.push('/시장');
  }, [history]);

  return (
    <Wrapper>
      <Left>
        <Icon onClick={onClick}>
          <ArrowLeftOutlined />
        </Icon>
        <Text>{title}</Text>
      </Left>
      <Right>
        <View>
          <EyeOutlined />
          {view}
        </View>
      </Right>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 420px;
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: #ffffff;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 29px;
  width: 29px;
  font-size: 20px;
  color: #1c79bc;
  cursor: pointer;
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #555555;
`;
const View = styled.div`
  display: flex;
  align-items: center;
  height: 29px;
  margin-right: 16px;
  font-size: 13px;
  color: #999999;

  & > span {
    margin-right: 10px;
  }
`;

export default React.memo(Header);
