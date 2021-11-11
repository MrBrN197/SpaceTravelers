import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';
import styles from './Mission.module.scss';

const Mission = ({
  name,
  id,
  reserved,
  description,
}) => {
  const dispatch = useDispatch();
  const clickHanlder = () => {
    if (reserved) {
      dispatch(leaveMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };

  const reservedClass = reserved ? styles.reserved : '';
  return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={styles.status}>
        <span className={reservedClass}>{reserved ? 'Active Member' : 'NOT MEMBER'}</span>
      </div>
      <div className={styles.status}>
        <button onClick={clickHanlder} type="button" className={reservedClass}>{reserved ? 'Leave Mission' : 'Join Mission'}</button>
      </div>
    </>
  );
};

Mission.defaultProps = {
  reserved: false,
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

export default Mission;
