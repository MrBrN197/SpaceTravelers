import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const { loaded } = useSelector((state) => state.missions);
  useEffect(() => {
    if (!loaded) {
      dispatch(fetchMissions());
    }
  }, [dispatch]);

  return (
    <div>Missions Page</div>
  );
};

export default Missions;
