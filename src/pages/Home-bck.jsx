import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import CharactersList from '../components/CharactersList';
import './styles/Home.css';
import Error from './Error';

const Home = () => {
  const INITIAL_STATE = {
    info: { next: '' },
    results: [],
    error: ''
  };
  const API = 'https://rickandmortyapi.com/api/character/';
  const [data, setData] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(API);
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);

  const fetchCharacters = url => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (searching) {
          if (!response.error) {
            setData(response);
            setSearching(false);
          } else {
            setData({ info: { next: '' }, results: [], error: response.error });
          }
        } else {
          setData({
            info: response.info,
            results: data.results.concat(response.results)
          });
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCharacters(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const handleMore = () => {
    setUrl(data.info.next);
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearching(true);
    setLoading(true);
    setUrl(`${API}?name=${query}`);
  };

  const handleRemoveSearch = () => {
    setLoading(true);
    setData(INITIAL_STATE);
    setQuery('');
    setUrl(API);
  };

  const handleReload = () => {
    setError(null);
    setUrl(API);
  };

  if (error) {
    return <Error error={error} reload={handleReload} />;
  }
  return (
    <main className='Main'>
      <SearchForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={query}
        removeSearch={handleRemoveSearch}
      />

      <CharactersList
        loading={loading}
        searchError={data.error}
        characters={data.results}
      />

      {!loading && data.info.next && (
        <button className='Main__MoreButton' onClick={handleMore}>
          More characters
        </button>
      )}
    </main>
  );
};

export default Home;
