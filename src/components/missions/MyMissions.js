import { useSelector } from 'react-redux';

const MyMissions = () => {
  const missions = useSelector((state) => state.missions.data);
  const reservedMissions = missions.filter((m) => m.reserved);
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
