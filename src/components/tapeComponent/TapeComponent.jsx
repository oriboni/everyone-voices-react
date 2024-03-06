import React from 'react';
import PostCard from "../postCard/PostCard";
import styles from './TapeComponent.module.css'
import testPostList from "./testPostList";
import {useSelector} from "react-redux";
import SortFilterBar from "../sortFilterBar/SortFilterBar";
import NewPostButton from "../newPostButton/NewPostButton";
const TapeComponent = () => {
    const {postLis, setPostLis} = testPostList()
    const switchTape = useSelector(state => state.switchTape.switch)
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
                        {postLis.map((post, index) => (
                            <PostCard key={index} post={post}/>
                        ))}
                        <NewPostButton setPost={setPostLis}/>
                    </div>
            }
        </div>
    );
};

export default TapeComponent;