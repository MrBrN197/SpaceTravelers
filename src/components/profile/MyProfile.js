import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missions';
import Container from './Container';
import styles from './MyProfile.module.scss';

const MyProfile = () => {
  const dispatch = useDispatch();

  const { loaded, data: missions } = useSelector((state) => state.missions);
  useEffect(() => !loaded && dispatch(fetchMissions()), [dispatch, loaded]);

  const reservedMissions = missions.filter((m) => m.reserved);

  return (
    <div className={styles.profile}>
      <Container
        title="My Rockets"
        data={reservedMissions.map((m) => ({
          name: m.mission_name,
          id: m.mission_id,
        }))}
      />
    </div>
  );
};

export default MyProfile;
