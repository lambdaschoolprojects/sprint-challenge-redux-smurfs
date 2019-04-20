import axios from 'axios';

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const START_FETCH = "START_FETCH";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

const SMURFY_API = "http://localhost:3333";

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
    dispatch({ type: START_FETCH });

    axios
        .get(SMURFY_API)
        .then(res =>
            dispatch({
                type: GET_SMURFS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: FETCH_FAIL,
                payload: err
            })
        )
}
