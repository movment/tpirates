import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  position: sticky;
  top: 49px;
  background-color: #eeeeee;
  height: 40px;
  z-index: 100;

  margin-top: 10px;
`;
const SNav = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  border-top: 1px solid #dddddd;
  align-items: center;
  color: #777777;
  border-bottom: 1px solid #dddddd;
  & + & {
    border-left: 1px solid #dddddd;
  }
`;

const Nav = () => {
  const {
    params: { store },
  } = useRouteMatch();

  return (
    <Wrapper>
      <SNav to={`/${store}/시세`} replace>
        가격 정보
      </SNav>
      <SNav to={`/${store}/탐방기`} replace>
        탐방기
      </SNav>
      <SNav to="#">리뷰</SNav>
      <SNav to="#">위치</SNav>
    </Wrapper>
  );
};

export default Nav;
