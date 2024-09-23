'use client'

export default function WorkEntry({ title, date, tools, path}) {
    return (<div className="work-entry">
        <h2>Title: {title}</h2>
        <p>Date: {date}</p>
        <p>Tools: {tools}</p>
        <a href={path}>Link</a>
    </div>)
}