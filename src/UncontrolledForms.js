import React from "react";
import "./App.css";

function UncontrolledForms() {
  const inputValue = React.createRef();
  function handleChange() {
    console.log(inputValue.current.value);
    // alert(inputValue.current.value);
    // this.setState = {(this.inputValue.current.value)};
  }
  return (
    <div>
      <input type="text" ref={inputValue} onChange={handleChange} />
    </div>
  );
}

export default UncontrolledForms;
