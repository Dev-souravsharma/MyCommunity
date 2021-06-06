import {actionTypes} from '../actions/actionTypes';

const INIT_STATE = {
  data: {
    loading: true,
    userdata: [],
    error: '',
  },
};

export default function loginReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        loading: false,
        userdata: action.payload,
        error: '',
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        loading: false,
        userdata: action.payload,
      };
    default:
      return state;
  }
}
