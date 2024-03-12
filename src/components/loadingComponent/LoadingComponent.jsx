import React from 'react';
import styles from './LoadingComponent.module.css'
const LoadingComponent = () => {
    return (
        <div className={styles.loadingWrapper}>
            <div className={styles.loadingText}>
                Загрузка
            </div>
            <div className={styles.loading}>

            </div>
        </div>
    );
};

export default LoadingComponent;