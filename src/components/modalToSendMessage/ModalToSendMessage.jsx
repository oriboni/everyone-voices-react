import React, { useState, useEffect } from 'react';
import styles from './ModalToSendMessage.module.css'
import getImage from "../../utils/getImage";
import useInput from "../../hooks/useInput";
import {useSelector} from "react-redux";
import {createMessage} from "../../API/getMessage";

const ModalToSendMessage = ({modalActive,handleClose}) => {
    const themePost = useInput("")
    const textpost = useInput("")
    const [images, setImages] = useState(null)
    const [imageName, setImageName] = useState(null)
    const [file, setFile] = useState(null)
    const user = useSelector(state => state.authLevel)
    const date = new Date()

    useEffect(() => {
        modalActive
            ?
            document.body.style.overflow = "hidden"
            :
            document.body.style.overflow = "unset"
    }, [modalActive]);

    const setImageInput = (e) => {
        const imagesInEvent = e.target.files
        setImageName(Object.values(imagesInEvent).map(file => file.name))
        setImages(Object.values(imagesInEvent).map(file => URL.createObjectURL(file)))
        setFile(imagesInEvent)
    }
    
    const submitForm = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', themePost.value)
        formData.append('text', textpost.value)
        formData.append('timestamp', date.toLocaleString('en-US', {timeZone: 'Europe/Moscow'}))
        const newMessage = await createMessage(formData)
    }
    
    console.log(imageName)
    return (
        <div className={styles.toSendrapper}>
            <div className={styles.toSendBlock}>
                <div className= {styles.toSendHead}>
                    <p>Новое сообщение</p>
                    <span className={styles.toSendExit} onClick={handleClose}></span>
                </div>
                <form className={styles.modalInner}>
                    <input className={styles.toSendInputTheme} type="text" placeholder="Тема предложения" value={themePost.value} onChange={themePost.onChange}/>
                    <textarea className={styles.toSendInputText} type="text" placeholder="Текст предложения" value={textpost.value} onChange={textpost.onChange}/>
                    {images
                            ?
                            images.map(image => (
                            <>
                                <div key={'DIV' + imageName[images.indexOf(image)]} className={styles.choseImageDiv}>
                                    <img key={image} className={styles.choseImage} src={image} alt=""/>
                                    <span key={imageName[images.indexOf(image)]} className={styles.choseImageName}>{imageName[images.indexOf(image)]}</span>
                                </div>
                            </>
                            ))
                            :
                            <></>
                        }
                    <div className={styles.toSendSend}>
                        <img className={styles.toSendButAttach} src={getImage("clip")} alt="send" />
                        <input className={styles.toSendInputAttach} type="file" accept=".jpg, .png, .jpeg, .gif, .svg" size={0} onChange={(e) => setImageInput(e)} multiple/>
                    </div>
                    <div className={styles.toSendAttach}>
                        <img className={styles.toSendButSend} src={getImage("send")} alt="attach" />
                        <button className={styles.toSendInputImage} onClick={(e) => submitForm(e)} src={getImage("report")}/>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default ModalToSendMessage;