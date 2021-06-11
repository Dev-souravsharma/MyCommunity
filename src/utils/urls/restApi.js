import {baseUrls} from './urls';
class RestClient {
  static async postRequest(endpoint, params) {
    // Here I will receive endpoint if i have
    let url = `${baseUrls}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
      });
      let jsonResponse = {};
      jsonResponse = await response.json();
      return Promise.resolve(jsonResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // Profile
  static async getProfile(endpoint, params) {
    // Here I will receive endpoint if i have
    let url = `${baseUrls}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
      });
      let jsonResponse = {};
      jsonResponse = await response.json();
      return Promise.resolve(jsonResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Events
  static async getEvents(endpoint, params) {
    // Here I will receive endpoint if i have
    let url = `${baseUrls}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
      });
      let jsonResponse = {};
      jsonResponse = await response.json();
      return Promise.resolve(jsonResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // NewsFeed
  static async getNewsFeed(endpoint, params) {
    // Here I will receive endpoint if i have
    let url = `${baseUrls}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
      });
      let jsonResponse = {};
      jsonResponse = await response.json();
      return Promise.resolve(jsonResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // EditProfile
  static async getEditProfile(endpoint, params) {
    // Here I will receive endpoint if i have
    let url = `${baseUrls}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
      });
      let jsonResponse = {};
      jsonResponse = await response.json();
      return Promise.resolve(jsonResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Notification
  static async getNotification(endpoint, params) {
    // Here I will receive endpoint if i have
    let url = `${baseUrls}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
      });
      let jsonResponse = {};
      jsonResponse = await response.json();
      return Promise.resolve(jsonResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
export default RestClient;
