import React, { Component } from 'react'
import { connect } from 'react-redux';
import s from  './SocialPage.module.css'
import { NavLink } from 'react-router-dom';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"; 
import "swiper/swiper-bundle.min.css"
import SwiperCore, { Navigation ,EffectFade } from 'swiper';

SwiperCore.use([Navigation]);

const Slider = ({imgs}) => {
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
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
     }}
    >
      {imgs && imgs.map((img,index) => <SwiperSlide key={index}>
          <div className={s.slide}> 
            <img src={img} alt=''/>
          </div>
        </SwiperSlide>
      )}
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
      <div className={s.flex}>
        <div className={s.wrapper}>
          <div className={s.card}>
            <Slider imgs={['https://sun9-84.userapi.com/impf/c837135/v837135011/c0c7/2SCevBPgprE.jpg?size=2048x1365&quality=96&sign=03ff19ee34bbcaaf9238dd8103261e3a&type=album',
            'https://sun9-5.userapi.com/impf/c629414/v629414503/3c36e/lHvm7cuUeXs.jpg?size=150x150&quality=96&sign=0904cc0e9f00a5645f0024e083be4864&type=album',
            'https://sun9-58.userapi.com/impf/c622119/v622119011/20e7b/fesw9LdV4m0.jpg?size=604x297&quality=96&sign=42f714437d50525ba4c58ce7325f6973&type=album',
            'https://sun9-73.userapi.com/impf/bOBD1p8xXpJNtmyxt3M_9IuiS_LxFeK7BfAaFQ/IYdhdlXZtkw.jpg?size=1023x680&quality=96&sign=9e62fc58a77864aa703d1b99051dbfd7&type=album']}/>
            <div className={s.info}>
              <div className={s.header}>
                <h1 className={s.name}>Юрий Дудь</h1>
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
                      <p className={s.value}>-</p>
                    </td>
                    <td>
                      <p className={s.lable}>Город:</p>
                      <p className={s.value}>Москава</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className={s.lable}>Почта:</p>
                      <p className={s.value}>-</p>
                    </td>
                    <td>
                      <p className={s.lable}>Место учебы:</p>
                      <p className={s.value}>МГУ '08</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className={s.lable}>Дата регистрации:</p>
                      <p className={s.value}>12.03.2012</p>
                    </td>
                    <td>
                      <p className={s.lable}>Подпсчиков:</p>
                      <p className={s.value}>37К</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className={s.lable}>День рождение::</p>
                      <p className={s.value}>11 октября 1986 г.</p>
                    </td>
                    <td>
                      <p className={s.lable}>Кол-во друзей:</p>
                      <p className={s.value}>380 человек</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={s.card}>
            <Slider imgs={['https://blognovichok.ru/wp-content/uploads/2019/06/original_dud.jpg',
            'https://www.ok-magazine.ru/images/cache/2018/12/6/resize_1200_630_true_crop_2250_1500_0_0_q90_59441_039fa8954ba2ef0db78c98e4b.jpeg',
            'https://avatars.mds.yandex.net/get-zen_doc/3584238/pub_600b350541733326ebeb7cd5_600b36151924cc033160ecc3/scale_1200',
            'https://lentachel.ru/netcat_files/Image/foto/2019/09/11/Dud_.jpg']}/>
            <div className={s.info}>
              <div className={s.header}>
                <h1 className={s.name}>Юрий Дудь</h1>
                <NavLink to={'/'}>Не мой аккаунт</NavLink>
              </div>
              <div className={s.socialName}>
                <img src={'./assets/img/twitter.svg'}/>
                Twitter
                <NavLink to={'/'}>перейти на сайт</NavLink>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p className={s.lable}>Телефон:</p>
                      <p className={s.value}>-</p>
                    </td>
                    <td>
                      <p className={s.lable}>Город:</p>
                      <p className={s.value}>Москава</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className={s.lable}>Почта:</p>
                      <p className={s.value}>-</p>
                    </td>
                    <td>
                      <p className={s.lable}>Твиты:</p>
                      <p className={s.value}>8 074 </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className={s.lable}>Дата регистрации:</p>
                      <p className={s.value}>ноябрь 2011 г.</p>
                    </td>
                    <td>
                      <p className={s.lable}>Читателя:</p>
                      <p className={s.value}>883,9 тыс.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className={s.lable}>День рождение::</p>
                      <p className={s.value}>11 октября 1986 г.</p>
                    </td>
                    <td>
                      <p className={s.lable}>В читаемых:</p>
                      <p className={s.value}>44</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={s.analitics}>
          <p className={s.analitTitle}>Аналитика</p>
          <p className={s.analitSubitle}>За последнюю неделю было проведено</p>
          <div className={s.timeline}>
            <span className={s.timeLabel}>Вконтакте</span>
            <span className={s.timeValue}>8ч 21мин</span>
            <span className={s.lineb}></span>
          </div>
          <div className={s.timeline}>
            <span className={s.timeLabel}>Одноклассники</span>
            <span className={s.timeValue}>2ч 10мин</span>
            <span className={s.lineo}></span>
          </div>
          <span className={s.endStr}>Общее кол-во 10ч 31мин</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export const SocialPage = connect(mapStateToProps, null)(SocialPageAPI)