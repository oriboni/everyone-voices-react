import React, {useState} from 'react';
import styles from './NewPostButton.module.css'
import NewPostModal from "../newPostModal/NewPostModal";
const NewPostButton = ({setPost}) => {
    const [activeModal, setActiveModal] = useState(false)
    return (
        <div>
            <div className={styles.newPostButton} onClick={() => setActiveModal(true)}>

            </div>
            <NewPostModal setPost={setPost} activeModal={activeModal} setActiveModal={setActiveModal}/>
        </div>
    );
};

export default NewPostButton;