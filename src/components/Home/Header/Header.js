import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <LImage src="Brand.png" />
      </Left>
      <Right>
        <RSign>로그인/가입</RSign>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
`;
const Left = styled.div`
  flex: 1;
`;
const LImage = styled.img`
  width: 162px;
  margin-top: 8px;
  margin-left: 16px;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RSign = styled.div`
  margin-right: 16px;
  font-size: 13px;
  color: #999999;
`;

export default Header;
