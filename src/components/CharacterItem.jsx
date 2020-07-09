import React from 'react';
import { Link } from 'react-router-dom';

const CharacterItem = ({ character }) => (
  <div key="card.id" className="column is-3">
    <Link to={`/character/${character.id}`} className="card large">
      <div className="card-image is-16by9">
        <figure className="image">
          <img src={character.image} alt={character.name} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4 no-padding">{character.name}</p>
        <p className={character.status === 'Alive' ? 'has-text-success' : 'has-text-danger'}>{character.status}</p>
      </div>
    </Link>
  </div>
);

export default CharacterItem;
