import React, { Component } from 'react'
import { connect } from 'react-redux';
import s from  './SocialPage.module.css'
import { NavLink } from 'react-router-dom';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"; 
import "swiper/swiper-bundle.min.css"
import SwiperCore, { Navigation ,EffectFade } from 'swiper';

SwiperCore.use([Navigation]);

const Slider = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <Swiper 
        className={s.slider}
        spaceBetween={50}
        slidesPerView={1} 
        modules={[EffectFade]} 
        effect="fade" 
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
          disabledClass: s.disable
        }}
        infinity={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
     }}
    >
      <SwiperSlide>
      <div className={s.slide}> 
        <img src={'https://sun9-83.userapi.com/impg/_NdiutKXB4wTPB0YFKb39RYqZyZhuqIwbl-7Lw/fdezs1mCZ5s.jpg?size=1619x2160&quality=96&sign=bc8df974a68436d9655b369bf0bebe09&type=album'}/>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={s.slide}> 
        <img src={'https://img5tv.cdnvideo.ru/webp/shared/files/202112/1_1433905.jpg'}/>
      </div>
      </SwiperSlide>
      <div className={s.arrows}>
        <div ref={navigationPrevRef} className={s.arrow}><ArrowLeft2/></div>
        <div ref={navigationNextRef} className={s.arrow}><ArrowRight2/></div>
      </div>
    </Swiper>
  )
}

class SocialPageAPI extends Component {
  render() {
    return (
      <div className={s.wrapper}>
         <div className={s.card}>
           <Slider/>
           <div className={s.info}>
             <div className={s.header}>
              <h1 className={s.name}>Матвей Степанов</h1>
              <NavLink to={'/'}>Не мой аккаунт</NavLink>
             </div>
             <div className={s.socialName}>
               <img src={'./assets/img/vk.svg'}/>
               Вконтакте
               <NavLink to={'/'}>перейти на сайт</NavLink>
             </div>
             <table>
               <tbody>
                 <tr>
                  <td>
                    <p className={s.lable}>Телефон:</p>
                    <p className={s.value}>+79942534420</p>
                  </td>
                  <td>
                    <p className={s.lable}>Город:</p>
                    <p className={s.value}>Самара</p>
                  </td>
                 </tr>
                 <tr>
                  <td>
                    <p className={s.lable}>Почта:</p>
                    <p className={s.value}>stepanov@gmail.com</p>
                  </td>
                  <td>
                    <p className={s.lable}>Место учебы:</p>
                    <p className={s.value}>СамГТУ</p>
                  </td>
                 </tr>
                 <tr>
                  <td>
                    <p className={s.lable}>Дата регистрации:</p>
                    <p className={s.value}>12.03.2012</p>
                  </td>
                  <td>
                    <p className={s.lable}>Факультет:</p>
                    <p className={s.value}>ИАИТ</p>
                  </td>
                 </tr>
                 <tr>
                  <td>
                    <p className={s.lable}>День рождение::</p>
                    <p className={s.value}>28 августа</p>
                  </td>
                  <td>
                    <p className={s.lable}>Кол-во друзей:</p>
                    <p className={s.value}>65 человек</p>
                  </td>
                 </tr>
                 
               </tbody>
             </table>
           </div>
         </div>
         <div className={s.card}>
           <Slider/>
           <div className={s.info}>
             <div className={s.header}>
              <h1 className={s.name}>Матвей Степанов</h1>
              <NavLink to={'/'}>Не мой аккаунт</NavLink>
             </div>
             <div className={s.socialName}>
               <img src={'./assets/img/vk.svg'}/>
               Вконтакте
               <NavLink to={'/'}>перейти на сайт</NavLink>
             </div>
             <table>
               <tbody>
                 <tr>
                  <td>
                    <p className={s.lable}>Телефон:</p>
                    <p className={s.value}>+79942534420</p>
                  </td>
                  <td>
                    <p className={s.lable}>Город:</p>
                    <p className={s.value}>Самара</p>
                  </td>
                 </tr>
                 <tr>
                  <td>
                    <p className={s.lable}>Почта:</p>
                    <p className={s.value}>stepanov@gmail.com</p>
                  </td>
                  <td>
                    <p className={s.lable}>Место учебы:</p>
                    <p className={s.value}>СамГТУ</p>
                  </td>
                 </tr>
                 <tr>
                  <td>
                    <p className={s.lable}>Дата регистрации:</p>
                    <p className={s.value}>12.03.2012</p>
                  </td>
                  <td>
                    <p className={s.lable}>Факультет:</p>
                    <p className={s.value}>ИАИТ</p>
                  </td>
                 </tr>
                 <tr>
                  <td>
                    <p className={s.lable}>День рождение::</p>
                    <p className={s.value}>28 августа</p>
                  </td>
                  <td>
                    <p className={s.lable}>Кол-во друзей:</p>
                    <p className={s.value}>65 человек</p>
                  </td>
                 </tr>
                 
               </tbody>
             </table>
           </div>
         </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export const SocialPage = connect(mapStateToProps, null)(SocialPageAPI)