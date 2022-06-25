import classes from './Image.module.css';

const Image = ({ src, className }) => {
  return (
    <div className={`${className} ${classes['image__container']}`}>
      <img
        className={classes['image__content']}
        src={src}
        alt='nature images'
      />
    </div>
  );
};

export default Image;
