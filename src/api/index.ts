// third-party libraries
import axios from 'axios';

// constant
const BASE_URL: string = process.env.REACT_APP_SHORTENER_API!;


// endpoints
export const apiEndpoint = {

  /**
   * Get shortenend url
   * @param url 
   * @returns 
   */
  async getUrl(url: string) {
    try {
      const result = await axios.get(`${BASE_URL}/shorten?url=${url}`);
      return result;
    } catch (error: any) {
      return error;
    }
  }
}

