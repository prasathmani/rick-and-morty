import React from 'react';
import LocationsItem from './LocationsItem';
import Loader from './Loader';

const LocationsList = ({ locations = [], loading, events }) => {
  if (loading) {
    return (
      <section className="columns" style={{ justifyContent: 'center' }}>
        <Loader />
      </section>
    );
  } else if (locations.length > 0) {
    return (
      <div className="row columns is-multiline">
        {locations.map(location => (
          <LocationsItem key={location.id} location={location} events={events} />
        ))}
      </div>
    );
  }
};

export default LocationsList;
