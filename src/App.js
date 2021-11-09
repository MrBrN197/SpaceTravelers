import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Missions from './components/missions/Missions';
import MyProfile from './components/profile/MyProfile';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>this is hompeage</Route>
        <Route path="/missions" exact><Missions /></Route>
        <Route path="/rockets" exact>these are rockets</Route>
        <Route path="/profile" exact><MyProfile /></Route>
      </Switch>
    </>
  );
}

export default App;
