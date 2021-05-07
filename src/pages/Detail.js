import React from 'react';
import { Route, useRouteMatch } from 'react-router';
import Header from '../components/Detail/Header/Header';
import Info from '../components/Detail/StoreInfo/Info';
import Nav from '../components/Detail/Nav/Nav';
import Default from '../components/Layout/Default';
import Price from '../components/Detail/Price/Price';
import Visit from '../components/Detail/Visit/Visit';

const Detail = () => {
  const {
    path,
    params: { store },
  } = useRouteMatch();

  return (
    <Default>
      <Header title={store} view={0} />
      <Info />
      <Nav />
      <Route
        path={[`${path}/시세`, path]}
        component={(props) => <Price {...props} />}
        exact
      />
      <Route
        path="/:store/탐방기"
        component={(props) => <Visit {...props} />}
      />
    </Default>
  );
};

export default React.memo(Detail);
