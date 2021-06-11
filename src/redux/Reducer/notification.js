import {actionTypes} from '../actions/actionTypes';

const INIT_STATE = {
  data: {
    loading: true,
    editProfileData: {},
    error: '',
  },
};

export default function notificationReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actionTypes.NOTIFICATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.NOTIFICATION_SUCCESS:
      return {
        loading: false,
        userdata: action.payload,
        error: '',
      };
    case actionTypes.NOTIFICATION_FAILURE:
      return {
        loading: false,
        userdata: action.payload,
      };
    default:
      return state;
  }
}
