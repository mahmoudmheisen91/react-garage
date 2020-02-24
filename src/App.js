import React from "react";
import "./App.css";
import SimpleComponent from "./Components/SimpleComponent.js";
import SecondCounter from "./Components/SecondCounter.js";
import ToDoList from "./Components/ToDoList.js";

function App() {
  return (
    <div>
      <SimpleComponent name="Mahmoud" />
      <SecondCounter />
      <ToDoList />
    </div>
  );
}

export default App;
