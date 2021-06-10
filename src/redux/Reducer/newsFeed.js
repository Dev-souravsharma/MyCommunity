import {actionTypes} from '../actions/actionTypes';

const INIT_STATE = {
  data: {
    loading: true,
    newsFeed: {},
    error: '',
  },
};

export default function newsFeedReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actionTypes.NEWSFEED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.NEWSFEED_SUCCESS:
      return {
        loading: false,
        userdata: action.payload,
        error: '',
      };
    case actionTypes.NEWSFEED_FAILURE:
      return {
        loading: false,
        userdata: action.payload,
      };
    default:
      return state;
  }
}
