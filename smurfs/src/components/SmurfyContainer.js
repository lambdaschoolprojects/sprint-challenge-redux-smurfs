import React from "react";

import Smurf from "./Smurf";

const SmurfyContainer = ({ smurfs }) => {
  return (
    <div>
      {smurfs &&
        smurfs.map(({ name, age, height, id }) => (
          <Smurf name={name} age={age} height={height} key={id} id={id} />
        ))}
    </div>
  );
};

export default SmurfyContainer;
