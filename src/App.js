
import "./App.css";
import React from "react";
import Photoalbum from "./components/Photoalbum";
import Toolbar from "./components/Toolbar";


function App() {
  return (
    <div className="App">
      <Toolbar></Toolbar>

      <Photoalbum />
    </div>
  );
}

export default App;
