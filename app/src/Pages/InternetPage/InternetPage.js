import React, { Component } from 'react'
import { connect } from 'react-redux';
import s from  './InternetPage.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react'
import { Card } from '../../Components/Card/Card';
import { SkeletonLoader } from '../../Components/Card/SkeletonCard';
import {getPhotos } from '../../redux/reducers'

class InternetPageAPI extends Component {
  componentDidMount(){
    this.props.getPhotos()
  }

  render() {
    const options = [
      {value: 'url', label: 'За последний месяц'},
      {value: 'url', label: 'За последний год'},
      {value: 'url', label: 'За все время'}
    ]

    return (
      <div className={s.wrapper}>
         <Dropdown options={options} 
        arrowClosed={<ArrowDown2 className={s.arrow}/>}
        arrowOpen={<ArrowUp2 className={s.arrow}/>}
        value={options[0]}
        className={s.dropdown}
        controlClassName={s.dropdownControl}
        menuClassName={s.dropdownMenu}
        placeholderClassName={s.dropdownPlaceholder}
        />
        {this.props.isFetching ? <SkeletonLoader/> :
        <div className={s.flex}>
          <Card 
          emotion={'нейтральный'}
          img={"https://storage.googleapis.com/telesite-prod/photos/afe7e1a0-4678-11e9-8678-0f66e65989b6.jpeg"}//ссылка на изображение
          title={'Аршавин попробует себя в роли комментатора'}//заголовок
          desc={'Вместе с Константином Геничем Аршавин прокомментирует матч отбора к Евро-2020 между Казахстаном и Россией, который пройдет 24 марта в 17:00 по мск.'}//описание
          linkSite={"https://football.ru/p/arshavin-poprobuet-sebya-v-roli-kommentatora"}//ссылка на страницу публикации
          smallDate={'15.11.2021'}//дата публикации интернет ресурса
          sourceUrl={'football.ru'}//ссылка на истрочник
          cardLink={'https://football.ru/p/arshavin-poprobuet-sebya-v-roli-kommentatora'}
          emotion={'Нейтральный'}
          />
          <Card 
          img={"https://icdn.lenta.ru/images/2021/07/11/18/20210711183332933/pic_0ca767eef7152630261ea0cd7c7b9e07.jpeg"}//ссылка на изображение
          title={'Мать Аршавина захотела спрятать сына от женщин'}//заголовок
          desc={'В июне мать футболиста отсудила дом у его тяжелобольной бывшей жены Алисы Казьминой. '}//описание
          linkSite={"https://lenta.ru/news/2021/07/12/arschavin/"}//ссылка на страницу публикации
          smallDate={'12 июля 2021'}//дата публикации интернет ресурса
          sourceUrl={'lenta.ru'}//ссылка на истрочник
          cardLink={'https://lenta.ru/news/2021/07/12/arschavin/'}
          emotion={'Негативный'}
          color={'red'}
          />
          <Card 
          img={"https://icdn.lenta.ru/images/2021/10/29/02/20211029020947163/pic_f3b8dfba601cafa44014948723765b6e.jpeg"}//ссылка на изображение
          title={'Тяжелобольная бывшая жена Аршавина попала в больницу'}//заголовок
          desc={'Бывшая жена футболиста Андрея Аршавина Алиса Казьмина попала в больницу и готовится к операции. Об этом сообщает издание StarHit.'}//описание
          linkSite={"https://lenta.ru/news/2021/10/29/alisa/"}//ссылка на страницу публикации
          smallDate={'29 октября 2021'}//дата публикации интернет ресурса
          sourceUrl={'lenta.ru'}//ссылка на истрочник
          cardLink={'https://lenta.ru/news/2021/10/29/alisa/'}
          emotion={'Нейтральный'}
          />
          <Card 
          img={"https://s7.stc.all.kpcdn.net/sports/wp-content/uploads/2021/12/w2hkhbk.jpeg"}//ссылка на изображение
          title={'Аршавин ездит по России и играет с детьми в футбол'}//заголовок
          desc={'— А может им через окно? Подгоним им туда автобус – и готово! – в судейской комнате стадиона городка Ярославской области Тутаев шло совещание, как спасать легенд сборной России.'}//описание
          linkSite={"https://www.kp.ru/sports/futbol/dlya-chego-arshavin-titov-tihonov-ezdyat-na-avtobuse-po-rossii-i-igrayut-v-futbol-s-detmi-v-kroshechnyh-gorodah/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews%2Fsearch%3Ftext%3D"}//ссылка на страницу публикации
          smallDate={'15.11.2021'}//дата публикации интернет ресурса
          sourceUrl={'www.kp.ru'}//ссылка на истрочник
          cardLink={'https://www.kp.ru/sports/futbol/dlya-chego-arshavin-titov-tihonov-ezdyat-na-avtobuse-po-rossii-i-igrayut-v-futbol-s-detmi-v-kroshechnyh-gorodah/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews%2Fsearch%3Ftext%3D'}
          emotion={'Положительный'}
          color={'green'}
          />
        </div>
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.app.isFetching
})

export const InternetPage = connect(mapStateToProps, { getPhotos })(InternetPageAPI)