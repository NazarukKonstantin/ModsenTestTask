import { useState } from 'react';
import { usePagination } from '@/hooks/usePagination';
import { useFetching } from '@/hooks/useFetching';
import BookService from '@/app/BookService';
import SearchPage from '@/pages/SearchPage/SearchPage';
import { constants } from 'buffer';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { ADD_ITEMS } from '@/store/bookReducer';
import Layout from '@/pages/Layout/Layout';

export function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const state = useTypeSelector((state) => state.book);

  //move
  const dispatch = useDispatch();
  //внутри действия кнопки писать preventDefault
  //dispatch({type:ADD_ITEMS, items: bookList[]ответсАПИ})

  const pagesArray = usePagination(totalPages);

  const [fetchBooks, areBooksLoading, fetchError] = useFetching(async () => {
    const response = await BookService.getBooks();
  });

  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
