import React from "react";
import "./App.css";
import SimpleComponent from "./Components/SimpleComponent.js";
import SecondCounter from "./Components/SecondCounter.js";

function App() {
  return (
    <div>
      <SimpleComponent name="Mahmoud" />
      <SecondCounter />
    </div>
  );
}

export default App;
