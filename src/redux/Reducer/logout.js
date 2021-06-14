import {actionTypes} from '../actions/actionTypes';

const INIT_STATE = {
  logoutData: {
    loading: true,
    logout: {},
    error: '',
  },
};

export default function newsFeedReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        loading: false,
        userdata: action.payload,
        error: '',
      };
    case actionTypes.LOGOUT_FAILURE:
      return {
        loading: false,
        userdata: action.payload,
      };
    default:
      return state;
  }
}
