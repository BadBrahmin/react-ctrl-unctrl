import React from "react";
import "./App.css";

function Forms() {
  const inputValue = React.createRef();
  function handleChange() {
    console.log(inputValue.current.value);
  }
  return (
    <div>
      <input type="text" ref={inputValue} onChange={handleChange} />
    </div>
  );
}

export default Forms;
