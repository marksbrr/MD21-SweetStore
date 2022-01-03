import { FC } from 'react';
import './cards.scss';

type Props = {
  price: number,
  title: string,
  imgUrl: string,
}

const Card: FC<Props> = ({
  price,
  title,
  imgUrl,
}) => (

  <>
    <div className="card__container">
      <img src={imgUrl} alt={title} className="card__images" />
      <div className="info__container">
        <p className="card__text">
          {title}
          {' '}
          Item
        </p>
        <p className="card__text card__text-heavy">
          $
          <span className="card__text">{price}</span>
        </p>
      </div>
    </div>
  </>

);

export default Card;
