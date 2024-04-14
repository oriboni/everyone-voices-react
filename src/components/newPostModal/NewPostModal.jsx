import React, {useEffect, useState} from 'react';
import styles from './NewPostModal.module.css'
import useInput from "../../hooks/useInput";
import {useSelector} from "react-redux";
import {createPost} from "../../API/getPosts";
const NewPostModal = ({activeModal, setActiveModal, setPost}) => {
    const themePost = useInput("")
    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)
    const user = useSelector(state => state.authLevel)
    const date = new Date()
    useEffect(() => {
        activeModal
            ?
            document.body.style.overflow = "hidden"
            :
            document.body.style.overflow = "unset"
    }, [activeModal]);

    const setImageInput = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        setFile(e.target.files[0])
    }
    const submitForm = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', themePost.value)
        formData.append('timestamp', date.toLocaleString('en-US', {timeZone: 'Europe/Moscow'}))
        formData.append('user_id', user.id)
        const newPost = await createPost(formData)
        setPost(prev => [newPost.data, ...prev])
        setActiveModal(false)
    }

    return (
        <div className={activeModal ? styles.modalWrapper : styles.modalWrapperNone}>
            <form className={styles.modalInner}>
                <input type="file" accept=".jpg, .png, .jpeg, .gif, .svg" onChange={(e) => setImageInput(e)}/>
                <input type="text" placeholder="Тема предложения" value={themePost.value} onChange={themePost.onChange}/>
                <img className={styles.choseImage} src={image} alt=""/>
                <button onClick={() => setActiveModal(false)}>Закрыть</button>
                <button onClick={(e) => submitForm(e)}>Отправить</button>
            </form>
        </div>
    );
};

export default NewPostModal;