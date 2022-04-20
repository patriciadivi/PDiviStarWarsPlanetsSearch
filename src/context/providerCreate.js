import React, { useState } from 'react';
import propTypes from 'prop-types';
import contextPlanetList from './contextPlanetList';
import fetchPlanetlist from '../services/Api';

function Provider({ children }) {
  const [planetlist, setFetchPlanetlist] = useState({}); // [state, setter]
  const [loading, setLoading] = useState(false);

  const getfetchPlanetlist = async () => {
    setLoading(true);
    const resultPlanetlist = await fetchPlanetlist();
    // console.log('resultPlanetlist', resultPlanetlist);
    setFetchPlanetlist(resultPlanetlist);
    setLoading(false);
  };

  const contextValue = {
    planetlist,
    getfetchPlanetlist,
    loading,
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
  // setState: PropTypes.func.isRequired,
};
