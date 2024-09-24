'use client'
import WorkModal from '@/components/work-modal.jsx';
import styles from '../styles/workentry.module.scss';

export default function WorkEntry({ title, date, tools, path, image, opened, onWorkChange, notes}) {
    return (<div className={styles.entry}>
        {!opened && <button className={styles.open} onClick={() => onWorkChange(title)}>{title}, {date}</button>}
        {opened && <WorkModal
            title={title}
            date={date}
            tools={tools}
            path={path}
            image={image}
            onWorkChange={onWorkChange}
            notes={notes}
        />}
    </div>)
}