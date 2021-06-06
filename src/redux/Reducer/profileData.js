import {actionTypes} from '../actions/actionTypes';
const PROFILE_INIT_STATE = {
  data: {
    loading: true,
    userdata: {},
    error: '',
  },
};

export default function profileDetail(state = PROFILE_INIT_STATE, action) {
  switch (action.type) {
    case actionTypes.PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.PROFILE_SUCCESS:
      return {
        loading: false,
        userdata: action.payload,
        error: '',
      };
    case actionTypes.PROFILE_FAILURE:
      return {
        loading: false,
        userdata: action.payload,
      };
    default:
      return state;
  }
}
