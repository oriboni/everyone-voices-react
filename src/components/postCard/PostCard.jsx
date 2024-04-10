import React, {useEffect, useState} from 'react';
import styles from './PostCard.module.css'
import getImage from "../../utils/getImage";
import {decrementLike, incrementLike} from "../../API/getLike";
import {useSelector} from "react-redux";
import CommentList from "../commentList/CommentList";
import {timestampPost} from "../../utils/getDate";
const PostCard = ({post}) => {
    const api_url = 'http://localhost:5000/'
    const [timestamp, setTimestamp] = useState('')
    const userId = useSelector(state => state.authLevel.id)
    const [openComment, setOpenComment] = useState(false)
    const [likeActive, setLikeActive] = useState(post.likedUser.some(obj => obj.id === userId))
    const setLike = async () => {
        setLikeActive(!likeActive)
        if (!likeActive) {
            await incrementLike({post_id: post.id, user_id: userId})
        } else {
            await decrementLike({post_id: post.id, user_id: userId})
        }
    }

    useEffect(() => {
        setTimestamp(timestampPost(post))
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
                    src={post.picture ? api_url + 'uploads/' + post.picture : ''}
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
                    onClick={() => setOpenComment(!openComment)}
                />
            </div>
            <CommentList openComment={openComment} comments={post.comment} postId={post.id}/>
        </div>
    );
};

export default PostCard;