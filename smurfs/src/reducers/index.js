/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GETTING_SMURFS,
  SMURFS_DONE_GOT,
  SMURF_ADDED,
  SMURF_DELETED,
  SMURF_UPDATED,
  ADDING_SMURF,
  DELETING_SMURF,
  UPDATING_SMURF,
  FAILED_REQUEST
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
    case FAILED_REQUEST:
      break;
    case GETTING_SMURFS:
      break;
    case SMURFS_DONE_GOT:
      return { ...state, smurfs: action.payload };
      break;
    case ADDING_SMURF:
      break;
    case SMURF_ADDED:
      break;
    case UPDATING_SMURF:
      break;
    case SMURF_UPDATED:
      break;
    case DELETING_SMURF:
      break;
    case SMURF_DELETED:
      break;
    default:
      return state;
  }

  return state;
};

export default smurfReducer;
