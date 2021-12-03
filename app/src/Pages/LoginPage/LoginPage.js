import React from 'react'
import s from  './LoginPage.module.css'
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/reducers';

const LoginAPIPage = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        props.loginUser(data.login, data.password)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.infoCol}>
                <div className={s.content}>
                    <img src={'./assets/img/logo-rtc.svg'}/>
                    <div className={s.text}>
                        <h1 className={s.title}>Almanac</h1>
                        <p className={s.subtitle}>Умная поисковая система для создания цифровых двойников</p>
                        <span className={s.linkBtn}>Как он работает</span>
                    </div>
                </div>
            </div>
            <div className={s.logCol}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className={s.formTitle}>Авторизация</h1>
                    <div className={s.tabs}>
                        <span className={s.active}>Логин</span>
                        <span>Телефон</span>
                        <span>Почта</span>
                        <span>Госуслуги</span>
                    </div>
                    {props.errorMessage && <p className={s.error}>{props.errorMessage}</p>}
                    <input type="name" placeholder="Логин" {...register("login")}/>
                    <input type="password" placeholder="Пароль" {...register("password")}/>
                    <div className={s.flex}>
                        <div className={s.checkboxGroup}>
                            <input type="checkbox" id="check"/>
                            <label for="check">Запомнить меня</label>
                        </div>
                        <span className={s.formLink}>Забыл пароль</span>
                    </div>
                    <button type="submit" className={s.submitBtn}>Войти</button>
                    <span className={s.or}>Или</span>
                    <span className={s.gos}>Войти через <span className={s.orangeLink}>Госуслуги</span></span>
                    <NavLink to={'/'} className={s.reg}>Зарегистрироваться</NavLink>
                    <span className={s.small}>Нажимая кнопку «Войти», вы принимаете условия</span>
                    <span className={s.privacy}>пользовательского соглашения</span>
                </form>
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        errorMessage: state.app.errorMessage
    }
}

export const LoginPage = connect(mapStateToProps, { loginUser })(LoginAPIPage)