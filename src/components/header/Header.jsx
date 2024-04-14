import React, {useState} from 'react';
import getImage from "../../utils/getImage";
import styles from './Header.module.css'
import Burger from "../burger/Burger";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const [menuActive, setMenuActive] = useState(false)

    const openMenu = () => {
        setMenuActive(true)
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <img
                    className={styles.logo}
                    src={getImage("logo")}
                    alt="#"
                    onClick={() => navigate("/")}
                />
                <div
                    className={styles.burgerButton}
                    onClick={openMenu}
                >
                    <span></span>
                </div>
            </div>
            <Burger active={menuActive} setActive={setMenuActive}/>
        </div>
    );
};

export default Header;