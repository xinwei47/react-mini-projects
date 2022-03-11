import classes from './Card.module.css';

const Card = (props) => {
  return (
    <li className={classes.card} onClick={props.onLinkClicked}>
      <a href={props.href} className={classes['card__link']}>
        <div className={classes['card__img-container']}>
          <img src={props.image} alt="" className={classes['card__img']} />
        </div>
        <div className={classes['card__info']}>
          <p className={classes['card__title']}>{props.title}</p>
        </div>
      </a>
    </li>
  );
};

export default Card;
