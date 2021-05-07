import styled from 'styled-components';
import Header from './Header';
import FishList from './FishList';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

const Menu = () => {
  return (
    <Wrapper>
      <Header title="품목시세" subtitle="마리당 구매 시 추천" />
      <FishList />
    </Wrapper>
  );
};

export default Menu;
