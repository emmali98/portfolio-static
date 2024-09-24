'use client'
import styles from '../styles/workmodal.module.scss';
import Image from 'next/image'

export default function WorkModal({ title, date, tools, path, onWorkChange, notes}) {
    return (<div className={styles.modal}>
        <div className={styles.wrapper}>
            <button className={styles.close} onClick={() => onWorkChange('')}>Close</button>
            <div className={styles.content}>
                <Image />
                <h2>Title: {title}</h2>
                <h3>Date: {date}</h3>
                <h3>Tools: {tools}</h3>
                <p>{notes}</p>
                <a target='_blank' href={path}>Open Link</a>
            </div>
        </div>
    </div>)
}