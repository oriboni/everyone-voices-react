import React, {useEffect, useState} from 'react';
import PostCard from "../postCard/PostCard";
import styles from './TapeComponent.module.css'
import {useSelector} from "react-redux";
import SortFilterBar from "../sortFilterBar/SortFilterBar";
import NewPostButton from "../newPostButton/NewPostButton";
import {getPosts} from "../../API/getPosts";
const TapeComponent = () => {
    const userId = useSelector(state => state.authLevel.id)
    const switchTape = useSelector(state => state.switchTape.switch)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const data = async () => {
            const postList = await getPosts(userId)
            setPosts(postList.data)
        }
        data()
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
                        {posts.length > 0
                            ?
                            posts.map(post => (
                                <PostCard post={post}/>
                            ))
                            :
                            <span>Загрузка</span>
                        }

                        <NewPostButton/>
                    </div>
            }
        </div>
    );
};

export default TapeComponent;