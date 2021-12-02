import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Tabs.module.css'

export const Tabs = () => {
  return (
   <ul className={s.wrapper}>
       <li>
           <NavLink to={'/photos'} activeClassName={s.active}>Фотографии</NavLink>
       </li>
       <li>
           <NavLink to={'/social'} activeClassName={s.active}>Социальные сети</NavLink>
       </li>
       <li>
           <NavLink to={'/internet'} activeClassName={s.active}>Интернет - ресурсы</NavLink>
       </li>
   </ul>
  );
}
