import React, {useEffect, useState} from 'react';
import styles from './OneComment.module.css'
import getImage from "../../utils/getImage";
import {dislikeComment, likeComment} from "../../API/getComment";
import {useSelector} from "react-redux";
import {timestampPost} from "../../utils/getDate";
const OneComment = ({comment}) => {
    const [countLike, setCountLike] = useState(comment.likes)
    const [timestamp, setTimestamp] = useState(null)
    const user_id = useSelector(state => state.authLevel.id)
    const [likeActive, setLikeActive] = useState(comment.likedUser.some(obj => obj.id === user_id))
    const setLike = async () => {
        setLikeActive(!likeActive)
        if (!likeActive) {
            setCountLike(prevState => prevState+1)
            await likeComment(user_id, comment.id)

        } else {
            setCountLike(prevState => prevState-1)
            await dislikeComment(user_id, comment.id)

        }
    }

    useEffect(() => {
        setTimestamp(timestampPost(comment.timestamp))
    }, [comment]);

    return (
        <div className={styles.commentWrapper}>
            <img className={styles.imgWrapper} src={comment.user.picture ? comment.user.picture : " "} alt=""/>
            <div className={styles.textWrapper}>
                <span className={styles.name}>{comment.user.name}</span>
                <span className={styles.title}>{comment.title}</span>
                <div className={styles.bottomBar}>
                    <span className={styles.timestamp}>{timestamp}</span>
                    <div className={styles.likeWrapper}>
                        <div className={styles.likeWrapper}>
                            <div
                                className={styles.likeBlock}
                                onClick={setLike}
                            >
                                <img
                                    className={styles.like}
                                    src={getImage("like")} alt=""
                                />
                                <img
                                    className={likeActive ? styles.likeFill + " " + styles.likeFillActive : styles.likeFill}
                                    src={getImage("likeFill")}
                                    alt=""
                                />
                            </div>
                            <span className={styles.likes}>{countLike}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneComment;