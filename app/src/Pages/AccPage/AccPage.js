import React, { Component } from 'react'
import s from  './AccPage.module.css'
import { NavLink } from 'react-router-dom';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/reducers';

const AccPageAPI = (props) => {
  return (
    <div>
      <div className='container'>
        <NavLink to={'/'} className={s.linkToBack}><ArrowLeft2/>Вернуться к поиску</NavLink>
        <h1 className={s.title}>Личный кабинет</h1>
        <h1 className={s.name}>Юрий Дудь</h1>
        <table className={s.table}>
          <tbody>
            <tr>
              <td>
                <p className={s.lable}>Дата рождения:</p>
                <p className={s.value}>05.09.2003</p>
              </td>
              <td>
                <p className={s.lable}>Телефон:</p>
                <p className={s.value}>+79942534420</p>
              </td>
              <td>
                <p className={s.lable}>Электронная почта:</p>
                <p className={s.value}>dud@gmail.com</p>
              </td>
            </tr>
          </tbody>
        </table>
        <span className={s.removeBtn}>Удалить аккаунт</span>
        <span className={s.removeBtn} onClick={() => props.logOut()}>Выйти</span>
      </div>
      <span className="linehr"></span>
      <div className="container">
          <h1 className={s.name}>Аналитика</h1>
          <div className={s.flex}>
            <div className={s.analitics}>
              <p className={s.analitTitle}>Социальные сети</p>
              <p className={s.analitSubitle}>За последнюю неделю было проведено</p>
              <div className={s.timeline}>
                <span className={s.timeLabel}>Вконтакте</span>
                <span className={s.timeValue}>8ч 21мин</span>
                <span className={s.lineb}></span>
              </div>
              <div className={s.timeline}>
                <span className={s.timeLabel}>Twitter</span>
                <span className={s.timeValue}>2ч 10мин</span>
                <span className={s.lineo}></span>
              </div>
              <span className={s.endStr}>Общее кол-во 10ч 31мин</span>
            </div>
            <div className={s.emotion}>
              <p className={s.analitTitle}>Интернет-ресурсы</p>
              <p className={s.analitSubitle}>За последнюю неделю сложилось мнение</p>
              <p className={s.green}>Положительное</p>
            </div>
          </div>
      </div>
      <span className="linehr"></span>
      <div className="container">
        <h1 className={s.name}>Ваш QR-код</h1>
        <p className={s.subtitle}>Покажите работадателю, чтобы поделиться коротким отчетом</p>
        <a href={'https://rtk.lightswitch.digital/report.html'} className={s.qr}>
            <img src={'./assets/img/qrdemo.svg'}/>
        </a>
      </div>
    </div>

  )
}


export const AccPage = connect(null, { logOut })(AccPageAPI)