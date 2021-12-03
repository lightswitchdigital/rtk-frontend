import React, { Component } from 'react'
import { connect } from 'react-redux';
import s from  './PhotosPage.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react'
import { NavLink } from 'react-router-dom';
import { Card } from '../../Components/Card/Card';

class PhotosPageAPI extends Component {
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
        <div className={s.flex}>
          <Card 
          img={"https://sun9-83.userapi.com/impg/_NdiutKXB4wTPB0YFKb39RYqZyZhuqIwbl-7Lw/fdezs1mCZ5s.jpg?size=1619x2160&quality=96&sign=bc8df974a68436d9655b369bf0bebe09&type=album"}
          source={"Вконтакте"}
          date={"12.03.2021"}
          linkPhoto={"/"}
          fakeBtn={true}
          />
          <Card 
          img={"https://sun9-83.userapi.com/impg/_NdiutKXB4wTPB0YFKb39RYqZyZhuqIwbl-7Lw/fdezs1mCZ5s.jpg?size=1619x2160&quality=96&sign=bc8df974a68436d9655b369bf0bebe09&type=album"}
          source={"Вконтакте"}
          date={"12.03.2021"}
          linkPhoto={"/"}
          fakeBtn={true}
          />
          <Card 
          img={"https://sun9-83.userapi.com/impg/_NdiutKXB4wTPB0YFKb39RYqZyZhuqIwbl-7Lw/fdezs1mCZ5s.jpg?size=1619x2160&quality=96&sign=bc8df974a68436d9655b369bf0bebe09&type=album"}
          source={"Вконтакте"}
          date={"12.03.2021"}
          linkPhoto={"/"}
          fakeBtn={true}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export const PhotosPage = connect(mapStateToProps, null)(PhotosPageAPI)