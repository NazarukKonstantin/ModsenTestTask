// import {Route, Routes} from 'react-router-dom'
// import SearchPage from 'src/pages/SearchPage';
import { useState } from 'react';
import { usePagination } from '@/hooks/usePagination';
import { useFetching } from '@/hooks/useFetching';
import BookService from '@/app/BookService';
import Header from '@components/Header/Header';
import { iPost } from '@/models';

//import PostList from 'src/components/PostList';

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
    setPosts(
      [...posts].sort((a, b) => {
        return a.id - b.id;
      })
    );
  };

  const filterBooks = (filterValue: string) => {
    SetSelectedFilter(filterValue);
  };

  return (
    <div className="App">
      <Header
        create={createPost}
        selectSort={sortPosts}
        sortValue={selectedSort}
        selectFilter={filterBooks}
        filterValue={selectedFilter}
      />
      {/* {posts.length !== 0 ? (
        <PostList posts={posts} title="Список" callback={removePost} />
      ) : (
        <div>Not found</div>
      )} */}
    </div>
  );
}

export default App;
