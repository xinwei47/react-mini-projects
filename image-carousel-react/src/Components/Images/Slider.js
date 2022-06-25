import { useState } from 'react';
import Image from './Image';
import classes from './Slider.module.css';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';

const Slider = ({ images }) => {
  const [cur, setCur] = useState(0);

  const nextBtnHandler = () => {
    // if cur = images.length-1, set cur to 0
    // otherwise, increase the index of the image to display by 1
    if (cur === images.length - 1) {
      setCur(0);
    } else {
      setCur((prevState) => prevState + 1);
    }
  };
  console.log(cur);

  const prevBtnClick = () => {
    if (cur === 0) {
      setCur(images.length - 1);
    } else {
      setCur((prevState) => prevState - 1);
    }
  };

  if (images.length < 0 || !Array.isArray(images)) return null;

  return (
    <section className={classes.slider}>
      <BsFillArrowRightCircleFill
        className={`${classes.btn} ${classes['btn__right']}`}
        onClick={nextBtnHandler}
      />
      <div className={classes['slider__images']}>
        {images.map(
          (image, ind) =>
            ind === cur && (
              <Image
                className={ind === cur ? 'image active' : 'image'}
                key={`sliderImage-${ind}`}
                src={image.image}
              />
            )
        )}
      </div>
      <BsFillArrowLeftCircleFill
        className={`${classes.btn} ${classes['btn__left']}`}
        onClick={prevBtnClick}
      />
    </section>
  );
};

export default Slider;
