import React from 'react';
import { NavLink } from 'react-router-dom'

export const Header = props => {
  return (
    <header className="header">
      <div className="container d-flex jc-sb">
        <NavLink to={'/'} className="logoRtc">
           Интеграция
        </NavLink>
        <NavLink to={'/'}>
          Личный кабинет
        </NavLink>
      </div>
    </header>
  );
}
