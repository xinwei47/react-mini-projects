import { useState } from 'react';
import Image from './Image';
import classes from './Slider.module.css';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import Thumbnails from './Thumbnails';

const Slider = ({ images }) => {
  const [curInd, setCurInd] = useState(0);
  // const [curSrc, setCurSrc] = useState('');

  const nextBtnHandler = () => {
    // if curInd = images.length-1, set curInd to 0
    // otherwise, increase the index of the image to display by 1
    if (curInd === images.length - 1) {
      setCurInd(0);
    } else {
      setCurInd((prevState) => prevState + 1);
    }
  };

  const prevBtnClick = () => {
    if (curInd === 0) {
      setCurInd(images.length - 1);
    } else {
      setCurInd((prevState) => prevState - 1);
    }
  };

  const thumbnailClickHandler = (event) => {
    let clickedThumbnailInd = images.findIndex(
      (image) => image.link === event.target.src
    );
    setCurInd(clickedThumbnailInd);
  };

  if (images.length < 0 || !Array.isArray(images)) return null;

  return (
    <section>
      <div className={classes.slider}>
        <BsFillArrowRightCircleFill
          className={`${classes.btn} ${classes['btn__right']}`}
          onClick={nextBtnHandler}
        />
        <div className={classes['slider__images']}>
          {images.map(
            (image, ind) =>
              ind === curInd && (
                <Image
                  className={
                    ind === curInd ? classes['image-active'] : classes['image']
                  }
                  key={`sliderImage-${ind}`}
                  src={image.link}
                />
              )
          )}
        </div>

        <BsFillArrowLeftCircleFill
          className={`${classes.btn} ${classes['btn__left']}`}
          onClick={prevBtnClick}
        />
      </div>
      <Thumbnails images={images} onThumbnailClick={thumbnailClickHandler} />
    </section>
  );
};

export default Slider;
