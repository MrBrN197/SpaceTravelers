import PropTypes from 'prop-types';
import styles from './Mission.module.scss';

const Mission = ({
  name,
  /* eslint-disable-next-line */
  id,
  description,
}) => (
  <>
    <h2>{name}</h2>
    <p>{description}</p>
    <div className={styles.status}>
      <span className="badge">Active Member</span>
    </div>
    <div className={styles.status}>
      <button type="button">Join Mission</button>
    </div>
  </>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
