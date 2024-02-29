import React from 'react';
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {logout} from "../../store/slices/authSlice";

function NewsTape() {
    const dispatch = useDispatch()

    const exit = () => {
        Cookies.remove('profile')
        dispatch(logout())
    }

    return (
        <div>
            Страница новостей в разработке
            <button onClick={exit}>
                тестовый логаут
            </button>
        </div>
    );
}

export default NewsTape;