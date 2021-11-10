import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = ({
  title,
  data,
}) => (
  <div>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.container}>
      {
          data.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))
        }
    </ul>
  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Container;
