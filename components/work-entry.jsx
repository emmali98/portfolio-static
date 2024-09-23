'use client'
import WorkModal from '@/components/work-modal.jsx';

export default function WorkEntry({ title, date, tools, path, opened, onWorkChange}) {
    return (<div className="work-entry">
        <h2>{title}, {date}</h2>
        {!opened && <button onClick={() => onWorkChange(title)}>Open...</button>}
        {opened && <WorkModal
            title={title}
            date={date}
            tools={tools}
            path={path}
            onWorkChange={onWorkChange}
        />}
    </div>)
}