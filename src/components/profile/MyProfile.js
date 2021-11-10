import { useSelector } from 'react-redux';
import Container from './Container';
import styles from './MyProfile.module.scss';
import { getReservedMissions } from '../missions/selectors';
import { getReservedRockets } from '../rockets/selectors';

const MyProfile = () => {
  const reservedMissions = useSelector(getReservedMissions);
  const reservedRockets = useSelector(getReservedRockets);

  return (
    <div className={styles.profile}>
      <Container
        title="My Missions"
        data={reservedMissions}
      />
      <Container
        title="My Rockets"
        data={reservedRockets}
      />
    </div>
  );
};

export default MyProfile;
