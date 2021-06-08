import {actionTypes} from '../actions/actionTypes';

const INIT_STATE = {
  data: {
    loading: true,
    eventData: {},
    error: '',
  },
};

export default function eventReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actionTypes.EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.EVENT_SUCCESS:
      return {
        loading: false,
        userdata: action.payload,
        error: '',
      };
    case actionTypes.EVENT_FAILURE:
      return {
        loading: false,
        userdata: action.payload,
      };
    default:
      return state;
  }
}
