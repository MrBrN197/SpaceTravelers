import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './Rockets.module.scss';

const Unreserved = styled.button`
background-color:rgb(0,123,255);
color: white;
border: none;
font-size:1rem;
border-radius: 5px;
`;
const Reserved = styled.button`
border: 1px #111 solid;
color:  grey;
font-size:1rem;
border-radius: 5px;
background: white;
`;

const Badge = styled.span`
color:  white;
padding: 3px;
margin-right: .5rem;
font-size:1rem;
border-radius: 5px;
font-weight: bold;
background-color: rgb(24,162,184);
`;

const Rocket = (props) => {
  const { rocket } = props;
  return (
    <div className={styles.rocket_div}>
      <img className={styles.rocket_img} src={rocket.flickr_images[0]} alt="rocket" />
      <div className={styles.rocket_details}>
        <h3>
          {rocket.rocket_name}
        </h3>
        <p>
          {rocket.active ? <Badge> Reserved </Badge> : null }
          {rocket.description}
        </p>
        {!rocket.active
          ? <Unreserved type="button"> Reserve Rocket</Unreserved>
          : <Reserved type="button"> Cancel Reservation</Reserved>}

      </div>
    </div>
  );
};

Rocket.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  rocket: PropTypes.object.isRequired,
};

export default Rocket;
