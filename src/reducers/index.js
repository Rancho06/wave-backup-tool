import { combineReducers } from 'redux';
import backupInfoReducer from './backupInfoReducer';

const rootReducer = combineReducers({
  backupInfo: backupInfoReducer
});

export default rootReducer;
