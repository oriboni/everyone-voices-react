import React from 'react';
import styles from './newsTape.module.css'
import TapeSwitcher from "../../components/tapeSwitcher/TapeSwitcher";
import TapeComponent from "../../components/tapeComponent/TapeComponent";

function NewsTape() {
    return (
        <div className={styles.wrapper}>
            <TapeSwitcher/>
            <TapeComponent/>
        </div>
    );
}

export default NewsTape;