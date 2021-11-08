import PropTypes from 'prop-types';

const Mission = ({
  name,
  /* eslint-disable-next-line */
  id,
  description,
}) => (
  <>
    <div>
      <h2>{name}</h2>
    </div>
    <div>
      <p>{description}</p>
    </div>
    <div>asfdasf</div>
    <div>asfdasf</div>
  </>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
