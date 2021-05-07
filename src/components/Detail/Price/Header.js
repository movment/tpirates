import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 10px;
  background-color: #f8f8f8;
  display: flex;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  align-items: center;
  height: 42px;
  padding: 9px 15px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: #555555;
  font-size: 15px;
  font-weight: 600;
`;
const Sub = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 5px;
  font-size: 13px;
  color: #999999;
`;

const PriceHeader = ({
  title = '메뉴 가격',
  subtitle = '한 접시 씩 구매 시 추천',
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Sub>{subtitle}</Sub>
    </Wrapper>
  );
};

export default PriceHeader;
