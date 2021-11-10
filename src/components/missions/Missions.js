import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missions';
import Mission from './Mission';
import styles from './Missions.module.scss';
import MissionHeader from './MissionHeader';

const Missions = () => {
  const dispatch = useDispatch();
  const { data: missions, loaded } = useSelector((state) => state.missions);
  useEffect(() => {
    if (!loaded) {
      dispatch(fetchMissions());
    }
  }, [dispatch, loaded]);

  const loadingMessage = <div> Loading missions...</div>;

  const content = (missions) => (
    <div className={styles.missions}>
      <MissionHeader />
      {missions.map((m) => (
        <Mission
          key={m.mission_id}
          name={m.mission_name}
          id={m.mission_id}
          description={m.description}
          reserved={m.reserved}
        />
      ))}
    </div>
  );

  return loaded ? (
    <>
      {content(missions)}
    </>
  ) : loadingMessage;
};

export default Missions;
