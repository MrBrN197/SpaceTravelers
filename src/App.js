import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Missions from './components/Missions';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>this is hompeage</Route>
        <Route path="/missions" exact><Missions /></Route>
        <Route path="/rockets" exact>these are rockets</Route>
        <Route path="/profile" exact>this is the profile</Route>
      </Switch>
    </>
  );
}

export default App;
