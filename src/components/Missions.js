import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const { data: missions, loaded } = useSelector((state) => state.missions);
  useEffect(() => {
    if (!loaded) {
      dispatch(fetchMissions());
    }
  }, [dispatch]);

  return (
    <div>
      {missions.map((m) => (
        <div key={m.mission_id}>
          <h2>{m.mission_name}</h2>
          <p>{m.description}</p>
        </div>
      ))}

    </div>
  );
};

export default Missions;
