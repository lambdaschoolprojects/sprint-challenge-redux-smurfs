import axios from "axios";

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GETTING_SMURFS = "GETTING_SMURFS";
export const SMURFS_DONE_GOT = "SMURFS_DONE_GOT";

export const ADDING_SMURF = "ADDING_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";

export const UPDATING_SMURF = "UPDATING_SMURF";
export const SMURF_UPDATED = "SMURF_UPDATED";

export const DELETING_SMURF = "DELETING_SMURF";
export const SMURF_DELETED = "SMURF_DELETED";

export const FAILED_REQUEST = "FAILED_REQUEST";

const SMURFY_API = "http://localhost:3333/smurfs";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = _ => dispatch => {
  dispatch({ type: GETTING_SMURFS });

  axios
    .get(SMURFY_API)
    .then(res =>
      dispatch({
        type: SMURFS_DONE_GOT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: FAILED_REQUEST,
        payload: err
      })
    );
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF });

  axios.post(SMURFY_API, smurf).then(res => {
    dispatch({
      type: SMURF_ADDED,
      payload: res.data
    });
  });
};
