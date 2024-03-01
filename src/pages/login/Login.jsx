import React, {useEffect, useState} from 'react';
import styles from './login.module.css'
import getImage from '../../utils/getImage'
import Input from "../../components/input/input";
import {useGoogleLogin} from '@react-oauth/google';
import {useDispatch} from "react-redux";
import {authAdmin, authUser} from "../../store/slices/authSlice";
import {useNavigate} from "react-router-dom";
import useInput from "../../hooks/useInput"
import axios from "axios";
import Cookies from "js-cookie";

function Login() {
    const pass = "1"
    const [correctInput, setCorrectInput] = useState(false)
    const [validButtonLogin, setValidButtonLogin] = useState(false)
    const email = useInput("")
    const password = useInput("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Деактивация кнопки "Далее" если одно из полей ввода пустое
    useEffect(() => {
        if((email.value && password.value) !== "") {
            setValidButtonLogin(false)
        } else {
            setValidButtonLogin(true)
        }
    }, [email.value, password.value]);

    // Вход через гугл аккаунт
    const googleLogin = useGoogleLogin ( {
        onSuccess: async (tokenResponse) => {

            const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {Authorization: `Bearer ${tokenResponse.access_token}`},
            })
                .then((userInfo) => {
                    return {...userInfo.data}
                })
            Cookies.set("profile", JSON.stringify(userInfo))
            dispatch(authUser(userInfo))
            navigate("/")
        },
        onError: (errorResponse) => console.log(errorResponse)
    });

    // Валидация полей входа по логину и паролю
    const adminLogin = () => {
        if (password.value === pass && email.value === pass) {
            Cookies.set('profile', JSON.stringify({email: email.value, adminRole: true}))
            dispatch(authAdmin({email: email.value}))
            navigate("/")
        } else {
            setCorrectInput(true)
        }
    }

    return (
        <div className={styles.backgroundWrapper}>

            <img
                className={`${styles.backgroundCircle} ${styles.circleTop}`}
                src={getImage("circleTop")} alt="#"
            />

            <img
                className={`${styles.backgroundCircle}
                 ${styles.circleBot}`}
                src={getImage("circleBot")}
                alt="#"
            />

            <div className={styles.loginArrayWrapper}>

                <div>
                    <img
                        className={styles.logo}
                        src={getImage("logo")}
                        alt="#"
                    />
                </div>

                <Input
                    label="Введите Почту"
                    value={email.value}
                    onChange={email.onChange}
                    incorrect={correctInput}
                    setIncorrect={setCorrectInput}
                />

                <Input
                    label="Введите Пароль"
                    value={password.value}
                    onChange={password.onChange}
                    incorrect={correctInput}
                    setIncorrect={setCorrectInput}
                />

                <div className={styles.buttonWrapper}>
                    <button
                        className={styles.loginButton}
                        onClick={() => adminLogin()}
                        disabled={validButtonLogin}
                    >
                        Далее
                    </button>

                    <button
                        className={styles.googleButton}
                        onClick={() => googleLogin()}
                    >
                        Войти через Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;