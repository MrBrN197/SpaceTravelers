import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import Mission from './Mission';
import styles from './Missions.module.scss';

const Missions = () => {
  const dispatch = useDispatch();
  const { data: missions, loaded } = useSelector((state) => state.missions);
  useEffect(() => {
    if (!loaded) {
      dispatch(fetchMissions());
    }
  }, [dispatch]);

  return (
    <div className={styles.missions}>
      {missions.map((m) => (
        <Mission
          key={m.mission_id}
          name={m.mission_name}
          id={m.mission_name}
          description={m.description}
        />
      ))}
    </div>
  );
};

export default Missions;
