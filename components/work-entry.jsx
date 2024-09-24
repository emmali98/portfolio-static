'use client'
import WorkModal from '@/components/work-modal.jsx';
import styles from '../styles/workentry.module.scss';

export default function WorkEntry({ title, date, tools, path, image, opened, onWorkChange, notes}) {
    return (<div className={styles.entry}>
        <h2>{title}, {date}</h2>
        {!opened && <button onClick={() => onWorkChange(title)}>Open...</button>}
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