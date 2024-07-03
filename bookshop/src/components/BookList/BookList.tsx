import "@components/BookList/BookList.css"
import BookItem from "../BookItem/BookItem";

const BookList = () => {
  // const temp_arr=[BookItem];

  return (
    <div className="book-list">
      {/* {temp_arr.map(e=><BookItem/>)}; */}
      <BookItem/>
      <BookItem/>
      <BookItem/>
      <BookItem/>
      <BookItem/>
    </div>
  )
};

export default BookList;
