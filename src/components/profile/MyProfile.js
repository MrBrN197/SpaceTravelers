import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missions';
import Container from './Container';

const MyProfile = () => {
  const dispatch = useDispatch();

  const { loaded, data: missions } = useSelector((state) => state.missions);
  useEffect(() => !loaded && dispatch(fetchMissions()), [dispatch, loaded]);

  const reservedMissions = missions.filter((m) => m.reserved);

  return (
    <>
      <Container
        title="My Rockets"
        data={reservedMissions.map((m) => ({
          name: m.mission_name,
          id: m.mission_id,
        }))}
      />
    </>
  );
};

export default MyProfile;
