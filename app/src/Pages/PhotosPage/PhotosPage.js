import React, { Component , useState } from 'react'
import { connect } from 'react-redux';
import s from  './PhotosPage.module.css'
import 'react-dropdown/style.css';
import DatePicker from 'sassy-datepicker';
import { Card } from '../../Components/Card/Card';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonLoader } from '../../Components/Card/SkeletonCard';
import {getPhotos } from '../../redux/reducers'

const DataPickerCMP = () => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [visible2, setVisible2] = useState(false);
  const [date2, setDate2] = useState(new Date());

  const handleDateSelect = (newDate) => {
    setDate(newDate);
    setVisible(false);
  }
  const handleDateSelect2 = (newDate) => {
    setDate2(newDate);
    setVisible2(false);
  };

  const togglePicker = () => setVisible((v) => !v);
  const togglePicker2 = () => setVisible2((v) => !v);

  const onsubmit = (from, to) => {
    console.log(from, to);
  }

  return(
    <div className={s.dateWrapper}>
      От:
      <input
          type="text"
          className={s.input}
          onClick={togglePicker}
          placeholder="От"
          value={date.toDateString()}
        />
        {visible ? (
          <DatePicker
            selected={date}
            onChange={handleDateSelect}
            className={s.datepicker}
          />
        ) : null}
        До:
        <input
          type="text"
          className={s.input}
          onClick={togglePicker2}
          placeholder="До"
          value={date2.toDateString()}
        />
        {visible2 ? (
          <DatePicker
            selected={date2}
            onChange={handleDateSelect2}
            className={s.datepicker}
          />
        ) : null}
        <span className={s.resetBtn} onClick={() => onsubmit(date, date2)}>фильтровать</span>
      </div>
  )
}

class PhotosPageAPI extends Component {

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
        <h3>Выбрать временной промежуток:</h3>
        <DataPickerCMP/>
        {this.props.isFetching ? <SkeletonLoader/> :
        <div className={s.flex}>
          <Card 
          img={"https://sun9-83.userapi.com/impg/_NdiutKXB4wTPB0YFKb39RYqZyZhuqIwbl-7Lw/fdezs1mCZ5s.jpg?size=1619x2160&quality=96&sign=bc8df974a68436d9655b369bf0bebe09&type=album"}
          source={"Вконтакте"}
          date={"12.03.2021"}
          linkPhoto={"/"}
          />
          <Card 
          img={"https://sun9-83.userapi.com/impg/_NdiutKXB4wTPB0YFKb39RYqZyZhuqIwbl-7Lw/fdezs1mCZ5s.jpg?size=1619x2160&quality=96&sign=bc8df974a68436d9655b369bf0bebe09&type=album"}
          source={"Вконтакте"}
          date={"12.03.2021"}
          linkPhoto={"/"}
          />
          <Card 
          img={"https://sun9-83.userapi.com/impg/_NdiutKXB4wTPB0YFKb39RYqZyZhuqIwbl-7Lw/fdezs1mCZ5s.jpg?size=1619x2160&quality=96&sign=bc8df974a68436d9655b369bf0bebe09&type=album"}
          source={"Вконтакте"}
          date={"12.03.2021"}
          linkPhoto={"/"}
          />
          <Card 
          img={"https://sun9-83.userapi.com/impg/_NdiutKXB4wTPB0YFKb39RYqZyZhuqIwbl-7Lw/fdezs1mCZ5s.jpg?size=1619x2160&quality=96&sign=bc8df974a68436d9655b369bf0bebe09&type=album"}
          source={"Вконтакте"}
          date={"12.03.2021"}
          linkPhoto={"/"}
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

export const PhotosPage = connect(mapStateToProps, { getPhotos })(PhotosPageAPI)