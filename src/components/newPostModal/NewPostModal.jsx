import React, {useEffect} from 'react';
import styles from './NewPostModal.module.css'
const NewPostModal = ({activeModal, setActiveModal}) => {

    useEffect(() => {
        activeModal
            ?
            document.body.style.overflow = "hidden"
            :
            document.body.style.overflow = "unset"
    }, [activeModal]);

    return (
        <div className={activeModal ? styles.modalWrapper : styles.modalWrapperNone}>
            <div className={styles.modalInner}>
                Создание поста в разработке
                <button onClick={() => setActiveModal(false)}>Закрыть</button>
            </div>
        </div>
    );
};

export default NewPostModal;