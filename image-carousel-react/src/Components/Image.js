import classes from './Image.module.css';

const Image = ({ src, className, onClick }) => {
  return (
    <div className={`${className} ${classes['image__container']}`}>
      <img
        className={classes['image__content']}
        onClick={onClick}
        src={src}
        alt='nature images'
      />
    </div>
  );
};

export default Image;
