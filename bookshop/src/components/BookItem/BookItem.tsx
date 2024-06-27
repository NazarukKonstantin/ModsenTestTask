import "@components/BookItem/BookItem.css"
import capy from "@assets/copybara.jpg";

const BookItem = () => {
  return (
    <div className="book-item">
      <img src={capy} alt="book cover" className="book-cover" />
      
    </div>
  )
};

export default BookItem;
