'use client'

export default function WorkEntry({ title, date, tools, path, opened, onWorkChange}) {
    return (<div className="work-entry">
        <h2>Title: {title}</h2>
        <p>Date: {date}</p>
        <p>Tools: {tools}</p>
        <button onClick={onWorkChange}>Open...</button>
        {opened && <div >Modal</div>}
    </div>)
}