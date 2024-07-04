import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '@/constants/constants';

const apiKey = process.env.REACT_APP_API;

const BookService = () => {
  const [searchParams, setSearchParams] = useState({
    searchTerm: "",
    category: "all",
    sortBy: "relevance",
  });
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  
  
  async function findBooksMatchingQuery(searchQuery: string) {
    return null;
  }
  async function getBooks() {
    try {
      const response = await axios.get( `${BASE_URL}?q=${searchParams.searchTerm}${
        searchParams.category !== "all"
          ? `+subject:${searchParams.category}`
          : ""
      }
      &orderBy=${
        searchParams.sortBy
      }&startIndex=${startIndex}&maxResults=30&key=${apiKey}`
    );
    
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default BookService;


