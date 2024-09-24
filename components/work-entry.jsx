'use client'
import WorkModal from '@/components/work-modal.jsx';
import styles from '../styles/workentry.module.scss';

export default function WorkEntry({ title, date, tools, path, opened, onWorkChange, notes}) {
    return (<div className={styles.entry}>
        <h2>{title}, {date}</h2>
        {!opened && <button onClick={() => onWorkChange(title)}>Open...</button>}
        {opened && <WorkModal
            title={title}
            date={date}
            tools={tools}
            path={path}
            onWorkChange={onWorkChange}
            notes={notes}
        />}
    </div>)
}