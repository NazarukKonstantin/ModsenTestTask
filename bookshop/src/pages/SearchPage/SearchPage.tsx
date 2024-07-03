import '@/pages/SearchPage/SearchPage.css';
import Header from '@/components/Header/Header';
import BookService from '@/app/BookService';
import BookList from '@/components/BookList/BookList';
import { useState } from 'react';

// interface SearchPageProps {
//   sortBooks: (value: string) => void;
//   selectedSort: string;

//   filterBooks: (value: string) => void;
//   selectedFilter: string;
// }

const SearchPage = () => {
  const [allFoundBooks, setAllFoundBooks] = useState(0);

  return (
    <div className='search-page'>
      <h4 className="found-title">
        Found {allFoundBooks} {allFoundBooks === 1 ? ' result' : ' results'}
      </h4>
      <BookList />
      <button type="button" className="show-more-btn">Show more</button>
    </div>
  );
};

export default SearchPage;
