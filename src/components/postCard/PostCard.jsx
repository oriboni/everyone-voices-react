import React, {useState} from 'react';
import styles from './PostCard.module.css'
import getImage from "../../utils/getImage";
const PostCard = ({post}) => {
    const [likeActive, setLikeActive] = useState(false)
    return (
        <div className={styles.wrapper}>
            <div className={styles.userBlock}>
                <img
                    src={post.user.picture ? post.user.picture : " "}
                    alt=""
                />
                <div className={styles.userInfo}>
                    <span>{post.user.name}</span>
                    <span className={styles.timeStamp}>{post.timestamp}</span>
                </div>
            </div>

            <div className={styles.aboutPostWrapper}>
                <span>{post.post.header}</span>
            </div>

            <div className={styles.blockPictures}>
                <img
                    src={post.post.picture}
                    alt=""
                />
            </div>

            <div className={styles.blockLikeComm}>
                <div
                    className={styles.likeWrapper}
                    onClick={() => setLikeActive(!likeActive)}
                >
                    <img
                        className={styles.like}
                        src={getImage("like")}
                        alt=""
                    />
                    <img
                        className={likeActive ? styles.likeFill + " " + styles.likeFillActive : styles.likeFill}
                        src={getImage("likeFill")} alt=""
                    />
                </div>
                <img
                    src={getImage("comment")}
                    alt=""
                />
            </div>
        </div>
    );
};

export default PostCard;