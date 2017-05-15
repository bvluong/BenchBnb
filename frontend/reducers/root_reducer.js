import SessionReducer from './session_reducer';
import BenchesReducer from './bench_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session: SessionReducer,
  benches: BenchesReducer
});
