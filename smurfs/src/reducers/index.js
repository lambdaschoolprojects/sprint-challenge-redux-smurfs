/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_FAIL,
  FETCH_SUCCESS,
  START_FETCH,
  GET_SMURFS,
  ADD_SMURF,
  DELETE_SMURF,
  UPDATE_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: {},
  updatingSmurf: {},
  deletingSmurf: {},
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAIL:
      break;
    case START_FETCH:
      break;
    case GET_SMURFS:
      console.log(action.payload);
      return state;
      break;
    case ADD_SMURF:
      break;
    case UPDATE_SMURF:
      break;
    case DELETE_SMURF:
      break;
    default:
      return state;
  }

  return state;
};

export default smurfReducer;
