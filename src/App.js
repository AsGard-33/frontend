import React, { useEffect, useState } from 'react';
import "./App.css";
import LocationsComponent from './components/LocationsComponent';

function App() {

  return (
    <div className="App">
      <h1>Привет, интернет</h1>
      <LocationsComponent/>
    </div>
  );
}

export default App;