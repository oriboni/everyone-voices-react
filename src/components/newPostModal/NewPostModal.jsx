import React, {useEffect, useState} from 'react';
import styles from './NewPostModal.module.css'
import useInput from "../../hooks/useInput";
import {useSelector} from "react-redux";
const NewPostModal = ({setPost, activeModal, setActiveModal}) => {
    const themePost = useInput("")
    const [image, setImage] = useState("")
    const user = useSelector(state => state.authLevel)
    const date = new Date()
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    useEffect(() => {
        activeModal
            ?
            document.body.style.overflow = "hidden"
            :
            document.body.style.overflow = "unset"
    }, [activeModal]);

    const submit = () => {
        const newPost =
            {
                user: {
                    picture: user.picture,
                    name: user.name,
                },
                timestamp: `${date.getDate()} ${months[date.getMonth()]} в ${date.getHours()}:${date.getMinutes()}`,
                post: {
                    header: themePost.value,
                    picture: image,
                }
            }
        setPost(prev => [newPost, ...prev])
        themePost.setValue("")
        setImage("")
        setActiveModal(false)
    }

    return (
        <div className={activeModal ? styles.modalWrapper : styles.modalWrapperNone}>
            <div className={styles.modalInner}>
                <input type="file" accept=".jpg, .png, .jpeg, .gif, .svg" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}/>
                <input type="text" placeholder="Тема предложения" value={themePost.value} onChange={themePost.onChange}/>
                <img className={styles.choseImage} src={image} alt=""/>
                <button onClick={() => setActiveModal(false)}>Закрыть</button>
                <button onClick={() => submit()}>Отправить</button>
            </div>
        </div>
    );
};

export default NewPostModal;