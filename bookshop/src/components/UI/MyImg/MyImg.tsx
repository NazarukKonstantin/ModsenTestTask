import { ImgHTMLAttributes } from 'react';
import './MyImg.css'

const MyImg = ({
  src,
  className = '',
}: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src={src}
      alt="book cover"
      className={'myImg ' + className}
    />
  );
};

export default MyImg;
