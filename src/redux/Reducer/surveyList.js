import {actionTypes} from '../actions/actionTypes';

const INIT_STATE = {
  surveyList: {
    loading: true,
    surveyList: {},
    error: '',
  },
};

export default function surveyListReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actionTypes.SURVEY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SURVEY_LIST_SUCCESS:
      return {
        loading: false,
        userdata: action.payload,
        error: '',
      };
    case actionTypes.SURVEY_LIST_FAILURE:
      return {
        loading: false,
        userdata: action.payload,
      };
    default:
      return state;
  }
}
