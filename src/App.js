import React from "react";
import "./App.css";
import ControlledForm from "./ControlledForms";
import UncontrolledForms from "./UncontrolledForms";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ControlledForm />
        <UncontrolledForms />
      </div>
    </div>
  );
}

export default App;
