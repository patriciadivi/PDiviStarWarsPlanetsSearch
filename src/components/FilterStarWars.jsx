import React, { useContext } from 'react';
import contextPlanetList from '../context/contextPlanetList';

export default function FilterStarWars() {
  const {
    setFetchPlanetlist, results,
    filterOrder, setFilterOrder,
    filterOptionStarWars, setOptionStarWars,
  } = useContext(contextPlanetList);

  const { columnOrder, comparisonOrder, valueOrder } = filterOrder;

  // const [filterOrder, setFilterOrder] = useState({
  //   columnOrder: '',
  //   comparisonOrder: '',
  //   valueOrder: 0,
  // });

  // useEffect(() => {
  //   const testFilterOrder = () => {
  //     console.log('filterOptionStarWars', filterOptionStarWars);
  //     // console.log('setOptionStarWars', setOptionStarWars);
  //   };
  //   testFilterOrder();
  // }, [filterOptionStarWars, setOptionStarWars]);

  const handleChangeFilters = ({ target: { name, value } }) => {
    setFilterOrder({ ...filterOrder, [name]: value });
  };

  const handleClickFilters = () => {
    setOptionStarWars(filterOptionStarWars
      .filter((opition) => opition !== columnOrder));

    switch (comparisonOrder) {
    case 'maior que':
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

          {
            filterOptionStarWars.map((opition) => (
              <option
                key={ opition }
                value={ opition }
              >
                { opition }
              </option>
            ))
          }

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
