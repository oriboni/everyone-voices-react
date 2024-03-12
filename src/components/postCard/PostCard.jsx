import React, {useEffect, useState} from 'react';
import styles from './PostCard.module.css'
import getImage from "../../utils/getImage";
import {decrementLike, incrementLike} from "../../API/getLike";
import {useSelector} from "react-redux";
const PostCard = ({post}) => {
    const [likeActive, setLikeActive] = useState(post.liked)
    const [timestamp, setTimestamp] = useState('')
    const userId = useSelector(state => state.authLevel.id)
    const setLike = async () => {
        setLikeActive(!likeActive)
        if (!likeActive) {
            await incrementLike({postId: post.id, userId})
        } else {
            await decrementLike({postId: post.id, userId})
        }
    }

    useEffect(() => {
        const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
        const date = new Date()
        const timestampPost = () => {
            const dayNow = date.getDate()
            const monthNow = date.getMonth()
            let datePost = post.timestamp.split(" ")[0].split(".")
            const timePost = post.timestamp.split(" ")[1].split(":")
            if (timePost[1].length === 1) {
                timePost[1] =  "0" + timePost[1]
            }
            if (dayNow === parseInt(datePost[0]) && monthNow === parseInt(datePost[1])) {
                datePost = "сегодня"
                return datePost + " в " + timePost.join(":")
            }
            if (dayNow - parseInt(datePost[0]) === 1 && monthNow === parseInt(datePost[1])) {
                datePost = "вчера"
                return datePost + " в " + timePost.join(":")
            }
            datePost = datePost[0] + " " + month[parseInt(datePost[1]) - 1]
            return datePost + " в " + timePost.join(":")
        }
        setTimestamp(timestampPost())
    }, [post]);



    return (
        <div className={styles.wrapper}>
            <div className={styles.userBlock}>
                <img
                    src={post.user.picture ? post.user.picture : " "}
                    alt=""
                />
                <div className={styles.userInfo}>
                    <span>{post.user.name}</span>
                    <span className={styles.timeStamp}>{timestamp}</span>
                </div>
            </div>

            <div className={styles.aboutPostWrapper}>
                <span>{post.title}</span>
            </div>

            <div className={styles.blockPictures}>
                <img
                    src={post.picture}
                    alt=""
                    loading="lazy"
                />
            </div>

            <div className={styles.likeCommentBlock}>
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
                <img
                    className={styles.comment}
                     src={getImage("comment")}
                    alt=""
                />
            </div>
        </div>
    );
};

export default PostCard;