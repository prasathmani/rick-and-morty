import React from 'react';
import { Link } from 'react-router-dom';

const Character = ({ character, episodes }) => (
  <section className="row">
    <div className="columns">
      <div className="column">
        <h1 className="title has-text-white">{character.name}</h1>
      </div>
      <div className="column has-text-right">
        <Link to="/" className="button is-primary is-outlined is-small">
          Go back
        </Link>
      </div>
    </div>
    <div className="columns featured-post is-multiline">
      <div className="column is-4 post-img ">
        <img className="Character__Image" src={character.image} alt={character.name} />
      </div>
      <div className="column is-8 featured-content va">
        <p>
          <label>Status:</label> {character.status}
        </p>
        <p>
          <label>Species:</label> {character.species}
        </p>
        <p>
          <label>Type/Subspecies:</label> {character.type}
        </p>
        <p>
          <label>Gender:</label> {character.gender}
        </p>
        <p>
          <label>Origin: </label> {character.origin.name}
        </p>
        <p>
          <label>Location:</label> {character.location.name}
        </p>
        <p className="is-size-5">Episodes:</p>
        <div className="Character__Episodes">
          {character.episode.map(episode => {
            const episodeId = episode.split('episode/')[1];
            const episodeRender = episodes[episodeId - 1];
            return (
              <p key={episodeId}>
                {episodeRender.episode}: {episodeRender.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Character;
