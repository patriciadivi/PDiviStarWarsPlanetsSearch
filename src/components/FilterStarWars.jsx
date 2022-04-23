import React, { useContext } from 'react';
import contextPlanetList from '../context/contextPlanetList';

export default function FilterStarWars() {
  const {
    setFetchPlanetlist, results,

    filterOrder, setFilterOrder,
  } = useContext(contextPlanetList);

  const { columnOrder, comparisonOrder, valueOrder } = filterOrder;

  // const [filterOrder, setFilterOrder] = useState({
  //   columnOrder: '',
  //   comparisonOrder: '',
  //   valueOrder: 0,
  // });

  // useEffect(() => {
  //   console.log('filterOrder', filterOrder);
  // }, [filterOrder, filterOrder.columnOrder, filterOrder.comparisonOrder, filterOrder.valueOrder]);

  const handleChangeFilters = ({ target: { name, value } }) => {
    setFilterOrder({ ...filterOrder, [name]: value });
  };

  const handleClickFilters = () => {
    switch (comparisonOrder) {
    case 'maior que':
      // console.log('columnOrder', columnOrder);
      // console.log(results.filter((planet) => +planet.orbital_period > +valueOrder));
      return setFetchPlanetlist(results
        .filter((planet) => +planet[columnOrder] > +valueOrder));
    case 'menor que':
      return setFetchPlanetlist(results
        .filter((planet) => +planet[columnOrder] < +valueOrder));
    case 'igual a':
      return setFetchPlanetlist(results
        .filter((planet) => +planet[columnOrder] === +valueOrder));
    default:
    }
  };

  return (
    <form>
      <label htmlFor="column">
        Coluna
        <select
          data-testid="column-filter"
          name="columnOrder"
          id="column"
          onChange={ handleChangeFilters }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="Operator">
        Operador
        <select
          data-testid="comparison-filter"
          name="comparisonOrder"
          id="Operator"
          value={ comparisonOrder }
          onChange={ handleChangeFilters }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        id="tableNumber"
        name="valueOrder"
        placeholder="Digite o valor"
        data-testid="value-filter"
        value={ valueOrder }
        onChange={ handleChangeFilters }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilters }
      >
        Filtrar
      </button>
    </form>
  );
}
