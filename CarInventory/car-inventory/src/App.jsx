import React from 'react';
import data from './data.js';
import Entry from './Components/Entry.jsx';
import './App.css';
import Header from './Components/Header.jsx';

const App = () => {
  const carEntries = data.map((car) => (
    <Entry
      key={car.id}
      img={car.img}
      title={car.title}
      country={car.country}
      carInfoLink={car.carInfoLink}
      dates={car.dates}
      text={car.text}
    />
  ));

  return (
    <>
      <Header />
      <main className="container">{carEntries}</main>;
    </>
  );
};

export default App;
