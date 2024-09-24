'use client'
import styles from '../styles/workmodal.module.scss';

export default function WorkModal({ title, date, tools, path, image, onWorkChange, notes}) {
    let bgImage = {backgroundImage: 'url(' + image.path + ')' };

    return (<div className={styles.modal}>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <button className={styles.close} onClick={() => onWorkChange('')}>X</button>
                    <img src={image.path} alt={image.alt} />
                </div>
                <h2>Title: {title}</h2>
                <h3>Date: {date}</h3>
                <h3>Tools: {tools}</h3>
                <p>{notes}</p>
                <a target='_blank' href={path}>Open Link</a>
            </div>
        </div>
    </div>)
}