import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missions';
import Container from './Container';
import styles from './MyProfile.module.scss';
import { getLoaded, getReservedMissions } from '../missions/selectors';

const MyProfile = () => {
  const dispatch = useDispatch();

  const reservedMissions = useSelector(getReservedMissions);
  const loaded = useSelector(getLoaded);
  useEffect(() => !loaded && dispatch(fetchMissions()), [dispatch, loaded]);

  return (
    <div className={styles.profile}>
      <Container
        title="My Missions"
        data={reservedMissions}
      />
    </div>
  );
};

export default MyProfile;
