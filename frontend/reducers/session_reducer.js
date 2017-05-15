import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = { currentUser: action.currentUser, errors: [] };
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, _nullUser, { errors: action.errors});
    default:
      return state;
  }
};

export default SessionReducer;
