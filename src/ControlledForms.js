import React from "react";

class ControlledForm extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleSubmit = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleSubmit}
        />

        <h4>{this.state.value}</h4>
      </div>
    );
  }
}

export default ControlledForm;
