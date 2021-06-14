import {actionTypes} from '../actions/actionTypes';

const INIT_STATE = {
  quickLinks: {
    loading: true,
    userdata: {},
    error: '',
  },
};

export default function quickLinksReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actionTypes.QUICK_LINK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.QUICK_LINK_SUCCESS:
      return {
        loading: false,
        userdata: action.payload,
        error: '',
      };
    case actionTypes.QUICK_LINK_FAILURE:
      return {
        loading: false,
        userdata: action.payload,
      };
    default:
      return state;
  }
}
