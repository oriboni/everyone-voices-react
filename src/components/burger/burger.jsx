import React from 'react';
import styles from './burger.module.css'
import getImage from "../../utils/getImage";
import Cookies from "js-cookie";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/slices/authSlice";

const Burger = ({active, setActive}) => {
    const user = useSelector(state => state.authLevel)
    const dispatch = useDispatch()
    const closeBurger = () => {
        setActive(false)
    }

    const exitProfile = () => {
        const cookie = Cookies.get('profile')
        if (cookie) {
            Cookies.remove('profile')
        }
        dispatch(logout())

    }

    return (
            <div className={styles.wrapper + " " + (active ? styles.burgerActive : styles.burgerDisabled)}>
                <div className={styles.burgerExit} onClick={closeBurger}>
                </div>

                <div className={styles.burgerUpperWrapper}>
                    <img className={styles.burgerUserImg} src={user.picture} alt=""/>
                    <div className={styles.userInfoWrapper}>
                        <p className={styles.burgerUsername}>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                </div>

                <ul className={styles.burgerNavbar}>
                    <li>
                        <img src={getImage("human")} alt=""/>
                        <span>Лента предложений</span>
                    </li>
                    <li>
                        <img src={getImage("voting")} alt=""/>
                        <span>Лента голосований</span>
                    </li>
                    <li>
                        <img src={getImage("report")} alt=""/>
                        <span>Связь с руководством</span>
                    </li>
                </ul>

                <div className={styles.burgerBottomWrapper}>
                    <img src={getImage("exit")} alt=""/>
                    <button onClick={exitProfile}>Выход</button>
                </div>

                <img className={styles.burgerStyle} src={getImage("burgerStyle")} alt=""/>
            </div>
    );
};

export default Burger;