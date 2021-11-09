import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import styles from './Rockets.module.scss';
import { loadRockets } from '../../redux/rockets/rockets';
import { getRockets, getLoading } from './selectors';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(getRockets);
  const loading = useSelector(getLoading);
  useEffect(() => rockets.length === 0 && dispatch(loadRockets()), []);

  const loadingMessage = <div> Loading rockets...</div>;
  const content = (rockets) => (
    rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)
  );

  return ((!loading)) ? (
    <div className={styles.rockets_div}>
      {content(rockets)}
    </div>
  ) : loadingMessage;
};

export default Rockets;
