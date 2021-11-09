import { Route, Switch } from 'react-router-dom';
import Rockets from './components/Rockets';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>this is hompeage</Route>
        <Route path="/missions" exact>these are missions</Route>
        <Route path="/rockets" exact>
          <Rockets />
        </Route>
        <Route path="/profile" exact>this is the profile</Route>
      </Switch>
    </>
  );
}

export default App;
