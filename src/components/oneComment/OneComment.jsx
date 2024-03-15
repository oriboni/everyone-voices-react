import React from 'react';
import styles from './OneComment.module.css'
import getImage from "../../utils/getImage";
const OneComment = ({comment}) => {
    return (
        <div className={styles.commentWrapper}>
            <img className={styles.imgWrapper} src={comment.user.picture ? comment.user.picture : " "} alt=""/>
            <div className={styles.textWrapper}>
                <span className={styles.name}>{comment.user.name}</span>
                <span className={styles.title}>{comment.title}</span>
                <div className={styles.bottomBar}>
                    <span className={styles.timestamp}>{comment.timestamp}</span>
                    <div className={styles.likeWrapper}>
                        <img className={styles.likeImg} src={getImage('like')} alt=""/>
                        <span className={styles.like}>{comment.likes}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneComment;