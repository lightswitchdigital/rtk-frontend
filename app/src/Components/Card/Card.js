import React from 'react';
import { NavLink } from 'react-router-dom';
import s from  './Card.module.css'

const CardInfo = ({img , source, date, emotion, linkPhoto, title, desc, linkSite, smallDate, sourceUrl}) => {
  return (
      <div className={s.card}>
          <div className={s.img}>
              <img src={img}/>
          </div>
          <div className={s.smallInfo}>
            {smallDate ? <p>{smallDate}</p> : null}
            {sourceUrl ? <NavLink to={sourceUrl}>{sourceUrl}</NavLink> : null}
          </div>
          {title ? <h1 className={s.title}>{title}</h1> : null}
          {desc ? <p className={s.desc}>{desc}</p> : null}
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
          {emotion ? <span className={s.emotion}>{emotion}</span> : null}
          {linkPhoto ? <NavLink to={'/'}>Перейти на страницу фотографии</NavLink> : null}
          {linkSite ? <NavLink to={'/'}>Перейти на сайт</NavLink> : null}
      </div>
  );
}

export const Card = ({img , source, date, fakeBtn, linkPhoto, title, desc, linkSite, smallDate, sourceUrl, cardLink}) => {
  if(cardLink){
    return (
      <NavLink to={cardLink} className={s.cardLink}>
        <CardInfo img={img} source={source} date={date} desc={desc} linkPhoto={linkPhoto} title={title} linkSite={linkSite} fakeBtn={fakeBtn} smallDate={smallDate} sourceUrl={sourceUrl}/>
      </NavLink>
    )
  }else{
    return (
      <CardInfo img={img} source={source} date={date} desc={desc} linkPhoto={linkPhoto} title={title} linkSite={linkSite} fakeBtn={fakeBtn} smallDate={smallDate} sourceUrl={sourceUrl}/>
  )
  }
}


