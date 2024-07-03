import MyImgWithFrame from '@/components/UI/MyImgWithFrame/MyImgWithFrame';
import '@/pages/BookDetailsPage/BookDetailsPage.css';
import capy from '@assets/copybara.jpg';

const BookDetailsPage = () => {
  return (
    <div className="book-details-page">
      <MyImgWithFrame
        src={capy}
        imgClassName="book-details-cover"
        shadowClassName="book-details-shadow"
      />
      <div className="text-info">
        <h4 className="tags">Art/General</h4>
        <h1 className="title">JS Bach Variations BLa Bla</h1>
        <h4 className="authors">Kendall Durelle Briggs</h4>
        <div className="description">
          <h5 className="descr-text">An open source something</h5>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
