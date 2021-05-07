import styled from 'styled-components';
import Address from './Address';
import Day from './Day';
import Phone from './Phone';
import Delivery from './Delivery';

const Info = () => {
  return (
    <Wrapper>
      <Top>
        <Image src="//via.placeholder.com/350x150" alt="Store" />
      </Top>
      <Bottom>
        <Address>
          경기도 안양시 동안구 평촌동 934-1 평촌(안양)농수산물시장(내) 31호
        </Address>
        <Day />
        <Phone />
        <Delivery />
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
  background-color: #1c79bc;
  color: #ffffff;
`;
const Top = styled.div``;
const Image = styled.img`
  width: 100%;
`;
const Bottom = styled.div`
  padding: 16px;
`;

export default Info;
