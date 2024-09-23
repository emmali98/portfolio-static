'use client'

export default function WorkModal({ title, date, tools, path, onWorkChange}) {
    return (<div>
        <button onClick={() => onWorkChange('')}>Close</button>
        <h2>Title: {title}</h2>
        <h3>Date: {date}</h3>
        <h3>Tools: {tools}</h3>
        <a href={path}>Open Link</a>
    </div>)
}