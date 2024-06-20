import axios from "axios";

export default class BookService{
  static async getBooks(){
    try{
      const response = await axios.get("");
      return response.data;
    }
    catch(e){
      console.log(e);
    }
  }
}