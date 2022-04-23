import React from 'react';
import FilterStarWars from '../components/FilterStarWars';
import OrderStarWars from '../components/OrderStarWars';
import Header from '../components/Header';
import Table from '../components/Table';

function Home() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div>
        <FilterStarWars />
      </div>
      <div>
        <OrderStarWars />
      </div>
      <div>
        <Table />
      </div>
    </section>
  );
}

export default Home;
