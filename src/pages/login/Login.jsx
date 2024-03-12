import React, {useEffect, useState} from 'react';
import styles from './login.module.css'
import getImage from '../../utils/getImage'
import Input from "../../components/input/Input";
import {useGoogleLogin} from '@react-oauth/google';
import {useDispatch} from "react-redux";
import {authAdmin, authUser} from "../../store/slices/authSlice";
import {useNavigate} from "react-router-dom";
import useInput from "../../hooks/useInput"
import Cookies from "js-cookie";
import {googleUserInfo} from "../../API/googleUserInfo";
import {getUsers, putUsersIcon} from "../../API/getUsers";

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

    const setLoginInfo = (info) => {
        Cookies.set('profile', JSON.stringify(info))
        info["adminRole"] ? dispatch(authAdmin(info)) : dispatch(authUser(info))
        navigate("/")
    }

    // Вход через гугл аккаунт
    const googleLogin = useGoogleLogin ( {
        onSuccess: async (tokenResponse) => {
            const userInfo = await googleUserInfo(tokenResponse.access_token)

            // Авторизация через сервер
            const users = await getUsers(userInfo.email)
            if (users) {
                putUsersIcon(users.id, userInfo.picture)
                const user = {
                    ...userInfo,
                    name: users.name,
                    id: users.id
                }
                setLoginInfo(user)
            } else {
                alert("Пользователь не найден :(")
            }
        },
        onError: (errorResponse) => console.log(errorResponse)
    });

    // Валидация полей входа по логину и паролю
    const adminLogin = () => {
        if (password.value === pass && email.value === pass) {
            setLoginInfo({email: email.value, adminRole: true})
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
                        далее
                    </button>

                    <button
                        className={styles.googleButton}
                        onClick={() => googleLogin()}
                    >
                        войти через Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;