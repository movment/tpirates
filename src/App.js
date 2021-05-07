import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => {
  return (
    <Switch>
      <Route path={['/', '/시장']} component={Home} exact />
      <Route path="/:store" component={Detail} />
    </Switch>
  );
};

export default App;
