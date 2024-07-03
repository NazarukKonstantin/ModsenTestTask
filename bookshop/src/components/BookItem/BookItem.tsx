import '@components/BookItem/BookItem.css';
import capy from '@assets/copybara.jpg';
import { Link } from 'react-router-dom';
import MyImgWithFrame from '../UI/MyImgWithShadow/MyImgWithShadow';

const BookItem = () => {
  return (
    <Link to={'bookDetails'}>
      <div className="book-item">
        <MyImgWithFrame src={capy} />
        <div className="text-frame">
          <h5 className="book-category-name">Category</h5>
          <h4 className="book-name">Capybara</h4>
          <h4 className="book-authors">Author</h4>
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
