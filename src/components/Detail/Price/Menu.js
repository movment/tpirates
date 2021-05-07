import styled from 'styled-components';
import Header from './Header';
import MenuList from './MenuList';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

const Menu = () => {
  return (
    <Wrapper>
      <Header />
      <MenuList />
    </Wrapper>
  );
};

export default Menu;
