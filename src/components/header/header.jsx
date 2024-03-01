import React, {useState} from 'react';
import getImage from "../../utils/getImage";
import styles from './header.module.css'
import Burger from "../burger/burger";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)

    const openMenu = () => {
        setMenuActive(true)
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <img className={styles.logo} src={getImage("logo")} alt="#"/>
                <div className={styles.burgerButton} onClick={openMenu}>
                    <span></span>
                </div>
            </div>
            <Burger active={menuActive} setActive={setMenuActive}/>
        </div>
    );
};

export default Header;