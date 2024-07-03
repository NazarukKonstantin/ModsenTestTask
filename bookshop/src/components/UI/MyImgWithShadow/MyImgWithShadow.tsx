import './MyImgWithShadow.css';
import MyImg from '../MyImg/MyImg';

interface MyImgWithShadowProps {
  src: string;
  imgClassName?: string;
  shadowClassName?: string;
}

const MyImgWithShadow = ({
  src,
  shadowClassName: frameClassName = '',
  imgClassName = ''
}: MyImgWithShadowProps) => {
  return (
    <div className={'imgWithShadow ' + frameClassName}>
      <MyImg src={src} className={imgClassName} />
    </div>
  );
};

export default MyImgWithShadow;
