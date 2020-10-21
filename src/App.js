import React from 'react';
import Bom from "./components/Bom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Bom id={1001} />
    </div>
  );
}

export default App;
