import React, {useState} from 'react';
import OneComment from "../oneComment/OneComment";
import styles from './CommentList.module.css'
import useInput from "../../hooks/useInput";
import {createComment} from "../../API/getComment";
import {useSelector} from "react-redux";

function CommentList({openComment, comments, postId}) {
    const [comment, setComment] = useState([...comments])
    const input = useInput('')
    const userId = useSelector(state => state.authLevel.id)
    const postComment = async () => {
        if (input.value) {
            const dates = new Date()
            const date = dates.getDate() + "." + dates.getMonth() + "." + dates.getFullYear() + " " + dates.getHours() + ":" + dates.getMinutes()
            await createComment(userId, postId, date, input.value)
        }
    }
    return (
        <div className={openComment ? styles.wrapper : styles.wrapper + " " + styles.wrapperClose}>
            <div>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Комментарий"
                    value={input.value}
                    onChange={input.onChange}
                />
                <button className={styles.button} onClick={postComment}>Отправить</button>
            </div>
            <div className={openComment ? styles.wrapper : styles.wrapper + " " + styles.wrapperClose}>

                {comment.map(comment => (
                    <OneComment key={comment.id} comment={comment}/>
                ))}
            </div>
        </div>
    );
}

export default CommentList;