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
          img={"https://img5tv.cdnvideo.ru/webp/shared/files/202112/1_1433905.jpg"}//ссылка на изображение
          title={'Итоги Agrotech-хакатона: на «Цифровом прорыве»'}//заголовок
          desc={'Завершился восьмой хакатон третьего сезона Всероссийского конкурса «Цифровой прорыв» — флагманского проекта президентской платформы «Россия — страна возможностей»'}//описание
          linkSite={"/"}//ссылка на страницу публикации
          smallDate={'15.11.2021'}//дата публикации интернет ресурса
          sourceUrl={'leadersofdigital.ru'}//ссылка на истрочник
          cardLink={'/'}
          emotion={'нейтральный'}
          />
          <Card 
          img={"https://img5tv.cdnvideo.ru/webp/shared/files/202112/1_1433905.jpg"}//ссылка на изображение
          title={'Итоги Agrotech-хакатона: на «Цифровом прорыве»'}//заголовок
          desc={'На итоговых соревнованиях наш университет представят 11 студентов'}//описание
          linkSite={"/"}//ссылка на страницу публикации
          smallDate={'15.11.2021'}//дата публикации интернет ресурса
          sourceUrl={'leadersofdigital.ru'}//ссылка на истрочник
          cardLink={'/'}
          emotion={'отрицательный'}
          color={'red'}
          />
          <Card 
          img={"https://img5tv.cdnvideo.ru/webp/shared/files/202112/1_1433905.jpg"}//ссылка на изображение
          title={'Итоги Agrotech-хакатона: на «Цифровом прорыве»'}//заголовок
          desc={'Завершился восьмой хакатон третьего сезона Всероссийского конкурса «Цифровой прорыв» — флагманского проекта президентской платформы «Россия — страна возможностей»'}//описание
          linkSite={"/"}//ссылка на страницу публикации
          smallDate={'15.11.2021'}//дата публикации интернет ресурса
          sourceUrl={'leadersofdigital.ru'}//ссылка на истрочник
          cardLink={'/'}
          emotion={'отрицательный'}
          color={'red'}
          />
          <Card 
          img={"https://img5tv.cdnvideo.ru/webp/shared/files/202112/1_1433905.jpg"}//ссылка на изображение
          title={'Итоги Agrotech-хакатона: на «Цифровом прорыве»'}//заголовок
          desc={'Завершился восьмой хакатон третьего сезона Всероссийского конкурса «Цифровой прорыв» — флагманского проекта президентской платформы «Россия — страна возможностей»'}//описание
          linkSite={"/"}//ссылка на страницу публикации
          smallDate={'15.11.2021'}//дата публикации интернет ресурса
          sourceUrl={'leadersofdigital.ru'}//ссылка на истрочник
          cardLink={'/'}
          emotion={'положительный'}
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