import axios from 'axios';

//const apiKey = process.env.REACT_APP_BOOKS_API_KEY;

// async function fetchObject(url:string){
//   return await fetch(url)
//   .then(res=>{
//     if(res.ok){
//       console.log("SUCCESS");
//     }
//     else{
//       console.log("Something went wrong");
//     }
//     res.json()});
// }

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
