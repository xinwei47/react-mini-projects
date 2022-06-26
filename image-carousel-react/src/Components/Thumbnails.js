import Image from './Image';
import classes from './Thumbnails.module.css';

const Thumbnails = ({ images, onThumbnailClick }) => {
  return (
    <div className={classes.thumbnails}>
      {images.map((image, ind) => (
        <Image
          className={classes['thumbnail-img']}
          key={`thumbnamil-${ind}`}
          src={image.link}
          onClick={onThumbnailClick}
        />
      ))}
    </div>
  );
};

export default Thumbnails;
