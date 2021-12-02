import React from 'react';
import { NavLink } from 'react-router-dom';
import s from  './Card.module.css'

export const Card = ({img , source, date, fake, link, title}) => {
  return (
    <div className={s.card}>
        <div className={s.img}>
            <img src={img}/>
        </div>
        {title ? <h1 className={s.title}>{title}</h1> : null}
        {source ? 
        <p className={s.info}>
            <span>Источник:</span>
            <span>{source}</span>
        </p> : null}
        {date ?
        <p className={s.info}>
            <span>Дата создания:</span>
            <span>{date}</span>
        </p> : null}
        {link ? <NavLink to={'/'}>Перейти на страницу фотографии</NavLink> : null}
        {fake ? <NavLink to={'/'}>Не моя фотография</NavLink> : null}
    </div>
  );
}
