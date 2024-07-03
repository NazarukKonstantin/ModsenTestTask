import { createBrowserRouter } from 'react-router-dom';
import App from 'src/app/app';
import SearchPage from '@/pages/SearchPage/SearchPage';
import BookDetailsPage from '@/pages/BookDetailsPage/BookDetailsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      { path: '', element: <SearchPage></SearchPage> },
      { path: 'bookDetails', element: <BookDetailsPage></BookDetailsPage> },
    ],
  },
]);
