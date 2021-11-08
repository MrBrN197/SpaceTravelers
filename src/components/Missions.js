import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMissions());
  }, [dispatch]);

  return (
    <div>Missions Page</div>
  );
};

export default Missions;
