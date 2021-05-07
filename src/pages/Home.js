import styled from 'styled-components';
import Banner from '../components/Home/Banner/Banner';
import Filter from '../components/Home/Filter/Filter';
import Header from '../components/Home/Header/Header';
import Main from '../components/Home/Main/Main';
import Nav from '../components/Home/Nav/Nav';

const SDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 420px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #eeeeee;
`;

const Home = () => {
  return (
    <SDiv>
      <Header />
      <Nav />
      <Banner />
      <Filter />
      <Main />
    </SDiv>
  );
};

export default Home;
