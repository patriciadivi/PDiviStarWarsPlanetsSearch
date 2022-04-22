import React, { useContext } from 'react';
import contextPlanetList from '../context/contextPlanetList';

export default function Header() {
  const {
    valueInput, setHandleChange,
  } = useContext(contextPlanetList);

  // const { results } = planetlist;

  const handleChange = ({ target: { name, value } }) => {
    setHandleChange({ [name]: value });
    // setHandleChange({ planetlist: filterPlanetlist });
    // const filterPlanetlist = results.filter((planet) => planet.name.toLowerCase().includes(value.toLowerCase()));
    // // console.log(filterPlanetlist);
    // if (value.length > 0) {
    //   setHandleChange(filterPlanetlist);
    // } else if (value.length === 0 || value.length === '') {
    //   getfetchPlanetlist();
    // }
  };

  return (
    <section>
      <label htmlFor="HeaderUser">
        Projeto Star Wars - Trybe
        <input
          data-testid="name-filter"
          type="text"
          id="HeaderUser"
          name="valueInput"
          value={ valueInput }
          onChange={ handleChange }

        />
      </label>
    </section>
  );
}
