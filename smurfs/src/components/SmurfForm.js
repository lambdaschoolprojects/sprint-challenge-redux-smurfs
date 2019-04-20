import React, { Component } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleChange = e => {
    let myKey = e.target.name;
    let myValue = e.target.value;

    this.setState({ [myKey]: myValue });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { name, age, height } = this.state;
    let id = new Date().getMilliseconds();

    this.addSmurf({ name, age, height, id });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          value={this.state.name}
          name="name"
          placeholder="name"
          onChange={e => this.handleChange(e)}
        />
        <input
          value={this.state.age}
          name="age"
          placeholder="age"
          onChange={e => this.handleChange(e)}
        />
        <input
          value={this.state.height}
          height="height"
          placeholder="height"
          onChange={e => this.handleChange(e)}
        />
        <button>Add Smurf</button>
      </form>
    );
  }
}

export default connect(
  null,
  {
    addSmurf
  }
)(SmurfForm);
