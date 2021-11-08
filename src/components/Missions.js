import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

let API_LOADED = false;
const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!API_LOADED) {
      dispatch(fetchMissions());
      API_LOADED = true;
    }
  }, [dispatch]);

  return (
    <div>Missions Page</div>
  );
};

export default Missions;
