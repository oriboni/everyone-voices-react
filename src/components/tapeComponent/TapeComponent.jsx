import React, {useEffect, useState} from 'react';
import PostCard from "../postCard/PostCard";
import styles from './TapeComponent.module.css'
import {useSelector} from "react-redux";
import SortFilterBar from "../sortFilterBar/SortFilterBar";
import NewPostButton from "../newPostButton/NewPostButton";
import {getPosts} from "../../API/getPosts";
import {useFetching} from "../../hooks/useFetching";
const TapeComponent = () => {
    const userId = useSelector(state => state.authLevel.id)
    const switchTape = useSelector(state => state.switchTape.switch)
    const [posts, setPosts] = useState([])
    const [fetchingPost, loadingPost, errorPost] = useFetching(async () => {
        const postList = await getPosts(userId)
        setPosts(postList.data)
    })
    useEffect(() => {
        fetchingPost()
    }, []);

    return (
        <div className={styles.wrapper}>
            {
                switchTape
                    ?
                    <div>
                        Лента голсований пока в разработке
                    </div>
                    :
                    <div className={styles.wrapper}>
                        <SortFilterBar/>
                        {loadingPost
                            ?
                            <span>Загрузка</span>
                            :
                            posts.map(post => (
                                <PostCard post={post}/>
                            ))
                        }

                        <NewPostButton/>
                    </div>
            }
        </div>
    );
};

export default TapeComponent;