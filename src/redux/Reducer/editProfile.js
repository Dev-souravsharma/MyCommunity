import {actionTypes} from '../actions/actionTypes';

const INIT_STATE = {
  data: {
    loading: true,
    editProfileData: [],
    error: '',
  },
};

export default function editProfileReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actionTypes.EDIT_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.EDIT_PROFILE_SUCCESS:
      return {
        loading: false,
        userdata: action.payload,
        error: '',
      };
    case actionTypes.EDIT_PROFILE_FAILURE:
      return {
        loading: false,
        userdata: action.payload,
      };
    default:
      return state;
  }
}
