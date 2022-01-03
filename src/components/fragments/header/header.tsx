import { FC } from 'react';

import './header.scss';
import Button from '../button/button';

const Header: FC = () => (

  <header className="header">
    <img src="https://js-beginners.github.io/filter-project/img/logo.svg" alt="doughnut" className="nav-image" />
    <div className="nav__button-container">
      <ul className="nav__list">
        <li className="nav__options">
          <a href="Home" className="nav__options-text">Home</a>
        </li>
        <li className="nav__options">
          <a href="About" className="nav__options-text">About</a>
        </li>
        <li className="nav__options">
          <a href="Store" className="nav__options-text">Store</a>
        </li>
      </ul>
      <div className="nav__contacts">
        <div className="nav__contacts-content">

          <p className="nav__phone">+ 123 456 789</p>

        </div>
        <div>
          <Button
            title="2 Items - $10.49"
          />
        </div>

      </div>

    </div>
  </header>
);

export default Header;
