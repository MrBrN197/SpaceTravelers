import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missions';

const MyMissions = () => {
  const { loaded, data: missions } = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((m) => m.reserved);

  const dispatch = useDispatch();
  useEffect(() => !loaded && dispatch(fetchMissions()), []);

  return (
    <div>
      <h2>My Missions</h2>
      <ul>
        {
          reservedMissions.map((m) => (
            <li key={m.mission_id}>{m.mission_name}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default MyMissions;
