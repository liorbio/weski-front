import React from 'react';
import './App.css';
import Header from './components/header/Header';
import SearchBody from './components/search/SearchBody';
import { useHotels } from './hooks/useHotels';

function App() {
  const { performSearch, hotels, searchCriteria, loading, error } = useHotels();

  return (
    <div className="App">
      <Header performSearch={performSearch} />
      <SearchBody hotels={hotels} searchCriteria={searchCriteria} loading={loading} error={error} />
    </div>
  );
}

export default App;
