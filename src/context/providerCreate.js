import React, { useState } from 'react';
import propTypes from 'prop-types';
import contextPlanetList from './contextPlanetList';
import fetchPlanetlist from '../services/Api';

function Provider({ children }) {
  // Fetch API
  const [results, setFetchPlanetlist] = useState([]); // [state, setter]
  // Loading Page
  const [loading, setLoading] = useState(false);
  // Filter Pelo Nome
  const [inputValue, setHandleChange] = useState('');
  // Filter Pela comparação
  const [filterOrder, setFilterOrder] = useState({
    columnOrder: 'population',
    comparisonOrder: 'maior que',
    valueOrder: '0',
  });
  // delete option já selecionadas
  const [filterOptionStarWars, setOptionStarWars] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  // useEffect(() => {
  //   console.log(valeuInput);
  // }, [valeuInput]);
  // MARAVILHA!

  const getfetchPlanetlist = async () => {
    setLoading(true);
    const resultPlanetlist = await fetchPlanetlist();
    // console.log('resultPlanetlist', resultPlanetlist);
    setFetchPlanetlist(resultPlanetlist.results);
    setLoading(false);
  };

  const contextValue = {
    results,
    getfetchPlanetlist,
    setFetchPlanetlist,
    loading,
    inputValue,
    setHandleChange,
    filterOrder,
    setFilterOrder,
    filterOptionStarWars,
    setOptionStarWars,
  };

  return (
    <contextPlanetList.Provider value={ contextValue }>
      { children }
    </contextPlanetList.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.node.isRequired,
};
