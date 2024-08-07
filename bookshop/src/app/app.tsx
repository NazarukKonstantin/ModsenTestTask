import { useState } from 'react';
import { usePagination } from '@/hooks/usePagination';
import { useFetching } from '@/hooks/useFetching';
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
  //внутри действия кнопки написать preventDefault
  //dispatch({type:ADD_ITEMS, items: bookList[]ответсАПИ})

  const pagesArray = usePagination(totalPages);

  const [fetchBooks, areBooksLoading, fetchError] = useFetching(async () => {
    // const response = await BookService.getBooks();
  });

  const selectFilter = (value: string) => {
    setSelectedFilter(value);
  };

  const selectSort=(value:string)=>{
    setSelectedSort(value);
  }

  return (
    <div className="App">
      <Layout
        selectFilter={selectFilter}
        sortingValue={selectedSort}
        selectSort={selectSort}
        filterValue={selectedFilter}
      />
    </div>
  );
}

export default App;
