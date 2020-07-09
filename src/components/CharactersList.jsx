import React, { useState, useEffect } from 'react';
import CharacterItem from './CharacterItem';
import Loader from './Loader';
import { getCharacters } from 'services';

const CharactersList = ({ location, events }) => {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = ids => {
    getCharacters(ids)
      .then(response => {
        setCharacters(response);
        setLoading(false);
      })
      .catch(err => {
        setCharacters(null);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (location) {
      const ids = [];
      location.residents.map(item => ids.push(item.split('/').pop()));
      fetchCharacters(ids.toString());
    }
  }, [location]); // eslint-disable-line

  const getHeading = () => {
    return (
      <div className="columns">
        <div className="column">
          <h1 className="title has-text-white">{location.name}</h1>
        </div>
        <div className="column has-text-right">
          <button className="button is-primary is-outlined is-small" onClick={events}>
            Go Back
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {getHeading()}
      {loading && (
        <section className="columns" style={{ justifyContent: 'center' }}>
          <Loader />
        </section>
      )}
      {characters && Array.isArray(characters) ? (
        <div className="row columns is-multiline">
          {characters.map(character => (
            <CharacterItem key={character.id} character={character} />
          ))}
        </div>
      ) : (
        characters && <CharacterItem key={characters.id} character={characters} />
      )}
    </>
  );
};

export default CharactersList;
