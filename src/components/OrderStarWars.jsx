import React from 'react';

export default function OrderStarWars() {
  return (
    <section>
      <label htmlFor="order">
        Ordenar
        <select id="order">
          <option value="population">population</option>
          <option value="orbinal_period">orbinal_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="AscendenteId">
        <input type="radio" id="AscendenteId" name="orderRadio" />
        Ascendente
      </label>
      <label htmlFor="DescendenteId">
        <input type="radio" id="DescendenteId" name="orderRadio" />
        Descendente
      </label>
      <button
        type="button"
      >
        Ordenar
      </button>
    </section>
  );
}
