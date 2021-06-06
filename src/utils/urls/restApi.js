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
}

export default RestClient;
