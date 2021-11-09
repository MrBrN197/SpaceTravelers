import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Rocket from './Rocket';
import styles from './Rockets.module.scss';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.data, shallowEqual);
  const content = (rockets) => (
    rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)
  );

  return (
    <div className={styles.rockets_div}>
      {content(rockets)}
    </div>
  );
};

export default Rockets;
