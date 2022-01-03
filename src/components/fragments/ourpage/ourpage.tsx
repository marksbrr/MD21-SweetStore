import { useState } from 'react';
import './ourpage.scss';
import itemArray from '../data/data';
import Button from '../button/button';
import Card from '../cards/cards';
import cardArray from '../data/cardArray';
import SearchBar from '../searchbar/searchbar';

export interface Searchbar {
  text: string;
}

const OurPage = () => {
  const [Cards, setCards] = useState(cardArray);
  const [search, setSearch] = useState('');

  const searchHandler = (input: string) => {
    setSearch(input);
  };

  const clickHandler = (title: string) => {
    setCards(cardArray.filter((item) => title === 'all' || item.title === title));
  };

  return (
    <>
      <div className="page__container">
        <h1 className="store__heading">
          Our
          {' '}
          <span className="store__heading-pink">Store</span>
        </h1>
        <div className="button__container">
          {itemArray.map((title) => (
            <Button
              key={title}
              title={title.toUpperCase()}
              onClick={() => clickHandler(title)}
            />
          ))}
        </div>
        <SearchBar
          onChange={searchHandler}
        />
        <div className="card__container-wrapper">
          {Cards.filter((card) => card.title.toLowerCase().indexOf(search.toLowerCase()) > -1).map((card) => (
            <Card
              key={card.imgUrl}
              title={card.type}
              price={card.price}
              imgUrl={card.imgUrl}
            />
          ))}
        </div>
      </div>

    </>
  );
};

export default OurPage;
