import React from 'react';
import { NavLink } from 'react-router-dom'

export const Header = props => {
  return (
    <>
    <header className="header">
      <div className="container d-flex jc-sb">
        <NavLink to={'/'} className="logoRtc">
            <img src="./assets/img/logo-rtc.svg" alt="rostelecom"/>
            Цифровой двойник
        </NavLink>
        <ul>
          <li>
            <NavLink to={'/'}>
              Помощь
            </NavLink>
          </li>
          <li>
            <NavLink to={'/'}>
              Бонус
            </NavLink>
          </li>
          <li>
            <NavLink to={'/'}>
              <span className="isax isax-d-cube-scan"></span>
              Офисы
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
    <header className="subheader">
      <div className="container d-flex jc-sb">
        <NavLink to={'/integration'} className="header-link">
           Интеграция
        </NavLink>
        <NavLink to={'/accaunt'} className="header-link">
          Личный кабинет
        </NavLink>
      </div>
    </header>
    </>
  );
}
