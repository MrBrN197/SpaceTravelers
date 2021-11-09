import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import styles from './Rockets.module.scss';
import { loadRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.data, shallowEqual);
  const loading = useSelector((state) => state.rockets.isLoading, shallowEqual);
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
