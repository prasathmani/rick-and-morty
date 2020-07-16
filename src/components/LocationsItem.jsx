import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LocationItems.scss';

const LocationsItem = ({ location, events }) => (
  <div v-for="card in cardData" key="card.id" className="column is-3">
    <div className="card-content location-item">
      <Link to={`/location/${location.id}`} data-id={location.id} onClick={events}>
        <div className="card large">
          <p className="title is-4 no-padding">{location.name}</p>
          <p className="has-text-grey-dark is-6">{location.dimension}</p>
        </div>
      </Link>
    </div>
  </div>
);

export default LocationsItem;
