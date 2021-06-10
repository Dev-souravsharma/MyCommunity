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
    type: actionTypes.LOGIN_FAILURE,
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

// EVENT
export const eventRequest = () => {
  return {
    type: actionTypes.EVENT_REQUEST,
  };
};

export const eventSuccess = users => {
  // console.log('User LoginSuccess', users);
  return {
    type: actionTypes.EVENT_SUCCESS,
    payload: users,
  };
};

export const eventError = error => {
  return {
    type: actionTypes.EVENT_FAILURE,
    payload: error,
  };
};

// NEWSFEED
export const newsFeedRequest = () => {
  return {
    type: actionTypes.NEWSFEED_REQUEST,
  };
};

export const newsFeedSuccess = users => {
  // console.log('User LoginSuccess', users);
  return {
    type: actionTypes.NEWSFEED_SUCCESS,
    payload: users,
  };
};

export const newsFeedError = error => {
  return {
    type: actionTypes.NEWSFEED_FAILURE,
    payload: error,
  };
};

// Profile
export const editProfileRequest = () => {
  return {
    type: actionTypes.EDIT_PROFILE_REQUEST,
  };
};

export const editProfileSuccess = users => {
  return {
    type: actionTypes.EDIT_PROFILE_SUCCESS,
    payload: users,
  };
};

export const editProfileError = error => {
  return {
    type: actionTypes.EDIT_PROFILE_FAILURE,
    payload: error,
  };
};

// Login actionCreator
export function login(email, password) {
  const data = {
    deviceType: 'iphone',
    // Password is demo
    password: password,

    tokenId: '71fbcd5350c87994c0cd847013039c027a26c68584fe6ec6dd2dc4b38f432ff7',
    // demouser
    username: email,
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

// EVENT action creator
export function getEvent() {
  const eventData = {
    offset: 0,
    userId: 269,
  };
  return dispatch => {
    dispatch(eventRequest());
    RestClient.getEvents('geteventslist', eventData)
      .then(result => {
        console.log('ACTION GETEVENT', result);
        dispatch(eventSuccess(result));
      })
      .catch(error => {
        dispatch(eventError(error));
      });
  };
}

// EVENT action creator
export function getNewsFeed() {
  const newsFeedData = {
    authToken: 'v1Rtu@lMan@G3r',
    authUser: 'virtualManager',
    community_id: 268,
    limit: '',
    offset: '',
    user_id: 269,
  };
  return dispatch => {
    dispatch(newsFeedRequest());
    RestClient.getNewsFeed('news_feed_listing', newsFeedData)
      .then(result => {
        console.log('ACTION NewsFeed DATA', result);
        dispatch(newsFeedSuccess(result));
      })
      .catch(error => {
        dispatch(newsFeedError(error));
      });
  };
}

// Edit-Profile action creator
// Login actionCreator
export function getEditProfile(
  firstName,
  lastName,
  phone,
  address,
  city,
  communityId,
  state,
  password,
  baseImage,
  email,
) {
  const editProfileData = {
    address: address,
    city: city,
    communityId: communityId,
    email: email,
    firstName: firstName,
    '&quot;is_allow_push_notification&quot': 1,
    lastName: lastName,
    phone: phone,
    state: state,
    userId: 269,
    userImage: baseImage,
    zipcode: 112233456,
  };
  return dispatch => {
    dispatch(editProfileRequest());
    RestClient.getEditProfile('login', editProfileData)
      .then(result => {
        // console.log('Action Creator Result', result);
        dispatch(editProfileSuccess(result));
      })
      .catch(error => {
        // console.log(error);
        dispatch(editProfileError(error));
      });
  };
}
