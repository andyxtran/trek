import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';

// importing jobsReducer to the main reducer function
const reducers = combineReducers({
  jobs: jobsReducer,
})

export default reducers;
