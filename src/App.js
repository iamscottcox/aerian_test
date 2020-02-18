import React from "react";
import Location from "./components/Location";
import Solar from "./components/Solar";

const App = () => {
  return (
    <div className="App">
      <h1>Sunrise and Sunset</h1>
      <Location />
      <Solar />
    </div>
  );
};

export default App;
