import PropTypes from 'prop-types';

const Container = ({
  title,
  data,
}) => (
  <div>
    <h2>{title}</h2>
    <ul>
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
