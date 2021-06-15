import {actionTypes} from '../actions/actionTypes';
const INIT_STATE = {
  postData: {
    loading: true,
    userdata: {},
    error: '',
  },
};

export default function postReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actionTypes.POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.POST_SUCCESS:
      return {
        loading: false,
        userdata: action.payload,
        error: '',
      };
    case actionTypes.POST_FAILURE:
      return {
        loading: false,
        userdata: action.payload,
      };
    default:
      return state;
  }
}
