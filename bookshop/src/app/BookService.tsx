import axios from 'axios';

export const apiKey = process.env.REACT_APP_API;

export default class BookService {
  static async findBooksMatchingQuery(searchQuery: string) {
    return null;
  }

  static async getBooks() {
    try {
      const response = await axios.get('');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
