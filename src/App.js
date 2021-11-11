import { Route, Switch } from 'react-router-dom';
import Rockets from './components/rockets/Rockets';
import Header from './Header';
import Missions from './components/missions/Missions';
import MyProfile from './components/profile/MyProfile';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Rockets />
        </Route>
        <Route path="/missions" exact>
          <Missions />
        </Route>
        <Route path="/rockets" exact>
          <Rockets />
        </Route>
        <Route path="/profile" exact>
          <MyProfile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
