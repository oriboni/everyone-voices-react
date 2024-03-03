import React, {useState} from 'react';
import styles from './newsTape.module.css'
import TapeSwitcher from "../../components/tapeSwitcher/tapeSwitcher";
import {useSelector} from "react-redux";

function NewsTape() {
    const switchTape = useSelector(state => state.switchTape.switch)
    return (
        <div className={styles.wrapper}>
            <TapeSwitcher/>
        </div>
    );
}

export default NewsTape;