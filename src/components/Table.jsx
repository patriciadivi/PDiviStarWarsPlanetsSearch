import React, { useContext, useEffect } from 'react';
import contextPlanetList from '../context/contextPlanetList';

function Table() {
  const {
    getfetchPlanetlist,
    results,
    inputValue,
    setHandleChange,
  } = useContext(contextPlanetList);

  useEffect(() => {
    getfetchPlanetlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { valueInput } = inputValue;

  // useEffect(() => {
  //   console.log('results', results);
  // }, [planetlist, results]);

  useEffect(() => {
    if (!valueInput) {
      setHandleChange({ valueInput: '' });
    }
    // console.log('valueInput', valueInput);
  }, [setHandleChange, valueInput]);

  return (
    <table name="">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>

      <tbody>
        {
           results?.filter((planet) => planet.name.toLowerCase()
             .includes(valueInput.toLowerCase()))
             .map((planet) => (
               <tr key={ planet.name }>
                 {/* { console.log(valueInput) } */}
                 <td>{planet.name}</td>
                 <td>{ planet.rotation_period }</td>
                 <td>{ planet.orbital_period }</td>
                 <td>{ planet.diameter }</td>
                 <td>{ planet.climate }</td>
                 <td>{ planet.gravity }</td>
                 <td>{ planet.terrain }</td>
                 <td>{ planet.surface_water}</td>
                 <td>{ planet.population }</td>
                 <td>{ planet.films }</td>
                 <td>{ planet.created }</td>
                 <td>{ planet.edited }</td>
                 <td>{ planet.url }</td>
               </tr>
             ))
        }
      </tbody>
    </table>

  );
}

export default Table;
