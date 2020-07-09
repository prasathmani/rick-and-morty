import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import Character from 'components/Character';
import './styles/CharacterPage.scss';

const CharacterPage = () => {
  let { characterId } = useParams();
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = 'https://rickandmortyapi.com/api/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterReq = await fetch(`${API}character/${characterId}`);
        const characterData = await characterReq.json();
        setCharacter(characterData);

        const episodes1Req = await fetch(`${API}episode`);
        const episodes1Data = await episodes1Req.json();

        const episodes2Req = await fetch(`${API}episode/?page=2`);
        const episodes2Data = await episodes2Req.json();
        setEpisodes(episodes1Data.results.concat(episodes2Data.results));

        setLoading(false);
      } catch (err) {
        setEpisodes([]);
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <section className="Character">
        <Loader />
      </section>
    );
  } else {
    return (
      <div className="container">
        <div className="section p-character">
          <Character character={character} episodes={episodes} />
        </div>
      </div>
    );
  }
};

export default CharacterPage;
