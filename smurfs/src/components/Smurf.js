import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteSmurf } from "../actions";

class Smurf extends Component {
  render() {
    const { name, age, height } = this.props;
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <h2>Name: {name}</h2>
          <h3>Age: {age}</h3>
          <h3>Height: {height}</h3>
          <button>Delete {name}</button>
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    console.log("test");
    e.preventDefault();
    this.props.deleteSmurf(this.props.id);
  };
}

export default connect(
  null,
  {
    deleteSmurf
  }
)(Smurf);
