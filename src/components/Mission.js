import PropTypes from 'prop-types';
import styles from './Mission.module.scss';

const Mission = ({
  name,
  /* eslint-disable-next-line */
  id,
  reserved,
  description,
}) => (
  <>
    <h2>{name}</h2>
    <p>{description}</p>
    <div className={styles.status}>
      <span className={reserved && styles.reserved}>{reserved ? 'Active Member' : 'NOT MEMBER'}</span>
    </div>
    <div className={styles.status}>
      <button type="button" className={reserved && styles.reserved}>{reserved ? 'Join Mission' : 'Leave Mission'}</button>
    </div>
  </>
);

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
