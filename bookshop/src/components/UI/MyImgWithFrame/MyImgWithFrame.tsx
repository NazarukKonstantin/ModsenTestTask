import MyImgWithShadow from '../MyImgWithShadow/MyImgWithShadow';
import './MyImgWithFrame.css';

interface MyImgWithFrameProps {
  src: string;
  imgClassName?: string;
  shadowClassName?: string;
  frameClassName?: string;
}

const MyImgWithFrame = ({
  src,
  shadowClassName = '',
  frameClassName = '',
  imgClassName = '',
}: MyImgWithFrameProps) => {
  return (
    <div className={'myImgWithFrame ' + frameClassName}>
      <MyImgWithShadow
        src={src}
        shadowClassName={shadowClassName}
        imgClassName={imgClassName}
      />
    </div>
  );
};

export default MyImgWithFrame;
