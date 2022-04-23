import React, { useState } from 'react';
import propTypes from 'prop-types';
import contextPlanetList from './contextPlanetList';
import fetchPlanetlist from '../services/Api';

function Provider({ children }) {
  const [results, setFetchPlanetlist] = useState([]); // [state, setter]
  const [loading, setLoading] = useState(false);
  const [inputValue, setHandleChange] = useState('');
  const [filterOrder, setFilterOrder] = useState({
    columnOrder: 'population',
    comparisonOrder: 'maior que',
    valueOrder: '0',
  });

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
