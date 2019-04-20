import React from "react";

const Smurf = ({ name, age, height }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>Height: {height}</h3>
    </div>
  );
};

export default Smurf;
