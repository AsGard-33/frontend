import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [locations,setLocations]=useState()
  async function fetchLocations() {
    const res = await fetch("/api/locations/");
    const obj = await res.json();
    setLocations(obj);
  }
  useEffect(() => {
    fetchLocations();
  }, []);
  return <div className="App">privet internet
    {locations.map(location =>(<p key={location.id}>{location.title}</p>))} 
  </div>;
}

export default App;