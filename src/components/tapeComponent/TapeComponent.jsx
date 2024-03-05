import React from 'react';
import PostCard from "../postCard/PostCard";
import styles from './TapeComponent.module.css'
import {postList} from "./testPostList";
import {useSelector} from "react-redux";
import SortFilterBar from "../sortFilterBar/SortFilterBar";
import NewPostButton from "../newPostButton/NewPostButton";
import NewPostModal from "../newPostModal/NewPostModal";
const TapeComponent = () => {
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
                        {postList.map((post, index) => (
                            <PostCard key={index} post={post}/>
                        ))}
                        <NewPostButton/>
                    </div>
            }
        </div>
    );
};

export default TapeComponent;