// import {Route, Routes} from 'react-router-dom'
// import SearchPage from 'src/pages/SearchPage';
import { useState } from 'react';
import '../styles/App.css';
import { usePagination } from 'src/hooks/usePagination';
import { useFetching } from 'src/hooks/useFetching';
import BookService from './BookService';
import MyButton from 'src/components/UI/MyButton/MyButton';
import MyInput from 'src/components/UI/MyInput/MyInput';

import { iPost } from 'src/models';

import PostList from 'src/components/PostList';
import Header from 'src/components/Header';

export function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Proga' },
    { id: 2, title: 'JS 2', body: 'Proga' },
    { id: 3, title: 'JS 3', body: 'Proga' },
  ]);

  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(30);
  const [page, setPage] = useState(1);
  const pagesArray = usePagination(totalPages);
  const [selectedSort, SetSelectedSort] = useState('');
  const [selectedFilter, SetSelectedFilter] = useState('');

  const [fetchBooks, areBooksLoading, fetchError] = useFetching(async () => {
    const response = await BookService.getBooks();
  });

  const createPost = (newPost: iPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: iPost) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sortValue: string) => {
    SetSelectedSort(sortValue);
    setPosts([...posts].sort((a,b)=>{return a.id-b.id}))
  };

  const filterBooks = (filterValue:string)=>{
    return;
  }

  return (
    <div className="App">
      <Header create={createPost} selectSort={sortPosts} selectorValue={selectedSort} selectFilter={filterBooks} filterValue={selectedFilter}/>
      {/* {posts.length !== 0 ? (
        <PostList posts={posts} title="Список" callback={removePost} />
      ) : (
        <div>Not found</div>
      )} */}
    </div>
  );
}

export default App;
