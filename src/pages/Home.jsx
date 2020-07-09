import React, { useState, useEffect } from 'react';
import LocationsList from 'components/LocationsList';
import CharactersList from 'components/CharactersList';
import { getAllLocations } from 'services';
import { getUrlParameter } from 'common';
import './styles/Home.scss';

const Home = () => {
  const INITIAL_STATE = {
    info: { next: '' },
    results: [],
    error: '',
  };

  const [data, setData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(1);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      getAllLocations(url)
        .then(response => {
          setData({
            info: response.info,
            results: data.results.concat(response.results),
            error: '',
          });
          setLoading(false);
        })
        .catch(err => {
          setData({ info: { next: '' }, results: [], error: err });
          setLoading(false);
        });
    })();
  }, [url]); // eslint-disable-line

  const handleMore = () => {
    const pageNo = getUrlParameter(data.info.next, 'page');
    setUrl(pageNo);
  };

  const handleLocations = e => {
    e.preventDefault();
    const $target = e.currentTarget;
    const selectedLocationId = $target.getAttribute('data-id');
    if (selectedLocationId) {
      const selectedLocation = data.results.filter(item => item.id == selectedLocationId); // eslint-disable-line
      setLocation(selectedLocation[0]);
    }
  };

  const handleGoBack = () => {
    setLocation(null);
  };

  return (
    <div className="container">
      <div className="section p-home">
        {!location && (
          <>
            <div className="columns">
              <div className="column has-text-centered">
                <h1 className="title has-text-white">Location List</h1>
              </div>
            </div>
            <LocationsList loading={loading} locations={data.results} events={handleLocations} />
          </>
        )}

        {location && <CharactersList location={location} events={handleGoBack} />}

        {!loading && !location && data.info.next && (
          <div className="column p-home__load-more">
            <button className="button is-primary" onClick={handleMore}>
              More locations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
