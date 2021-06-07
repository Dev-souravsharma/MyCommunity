import RestClient from '../../utils/urls/restApi';
import {actionTypes} from '../actions/actionTypes';
// Login
export const loginRequest = () => {
  return {
    type: actionTypes.LOGIN_REQUEST,
  };
};

export const loginSuccess = users => {
  console.log('User LoginSuccess', users);
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: users,
  };
};

export const loginError = error => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: error,
  };
};

// Profile
export const profileRequest = () => {
  return {
    type: actionTypes.PROFILE_REQUEST,
  };
};

export const profileSuccess = users => {
  return {
    type: actionTypes.PROFILE_SUCCESS,
    payload: users,
  };
};

export const profileError = error => {
  return {
    type: actionTypes.PROFILE_FAILURE,
    payload: error,
  };
};

// Login actionCreator
export function login() {
  const data = {
    deviceType: 'iphone',

    password: 'demo',

    tokenId: '71fbcd5350c87994c0cd847013039c027a26c68584fe6ec6dd2dc4b38f432ff7',

    username: 'demouser',
  };
  return dispatch => {
    dispatch(loginRequest());
    RestClient.postRequest('login', data)
      .then(result => {
        // console.log('Action Creator Result', result);
        dispatch(loginSuccess(result));
      })
      .catch(error => {
        // console.log(error);
        dispatch(loginError(error));
      });
  };
}

// Profile actionCreator
export function getProfile(id) {
  const profileData = {
    userId: id,
  };
  return dispatch => {
    dispatch(profileRequest());
    RestClient.getProfile('getuserprofile', profileData)
      .then(result => {
        // console.log(
        //   '------------------------------',
        //   '\n Profile Data',
        //   result,
        // );
        dispatch(profileSuccess(result));
      })
      .catch(error => {
        dispatch(profileError(error));
      });
  };
}
