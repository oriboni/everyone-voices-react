import React from 'react';
import OneComment from "../oneComment/OneComment";
import styles from './TwoCommentList.module.css'

const TwoCommentList = ({comments}) => {

    return (
        <div className={comments.length ? styles.commentsWrapper : ''}>
            {
                comments.map((comment) => (<OneComment key={comment.id} comment={comment}/>))
            }
        </div>
    );
};

export default TwoCommentList;