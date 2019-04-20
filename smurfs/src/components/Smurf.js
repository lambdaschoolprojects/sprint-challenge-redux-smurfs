import React from "react";
import { connect } from "react-redux";

import deleteSmurf from "../actions";

const Smurf = ({ name, age, height, id }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>Height: {height}</h3>
      <button onSubmit={e => handleSubmit(e)}>Delete {name}</button>
    </div>
  );
};

const handleSubmit = e => {
  e.preventDefault();
};

export default connect(
  null,
  {
    deleteSmurf
  }
)(Smurf);
