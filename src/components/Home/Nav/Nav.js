import { useRouteMatch } from 'react-router';
import styled from 'styled-components';

const lists = ['홈', '시장', '쇼핑', '콘텐츠', '시세', '도매', '후기', '문의'];

const Nav = () => {
  const { path } = useRouteMatch();

  return (
    <Wrapper>
      <SUl>
        {lists.map((list, index) => (
          <SLi key={index} clicked={path === `/${list}`}>
            {list}
          </SLi>
        ))}
      </SUl>
    </Wrapper>
  );
};

const Wrapper = styled.nav``;
const SUl = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 40px;
  padding: 10px 0;
  background-color: #ffffff;
`;
const SLi = styled.li`
  height: 20px;
  padding: 0 10px;
  color: ${({ clicked }) => (clicked ? '#1C79BC' : '777777')};
  font-weight: 600;
  cursor: pointer;
`;

export default Nav;
