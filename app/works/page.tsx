'use client'
import WorkEntry from '@/components/work-entry.jsx';
import workData from '../../public/works-data.jsx';
import { useState } from 'react';
import styles from '../../styles/page.module.scss';

export default function Page() {
  const [openWork, setOpenWork] = useState('');

  const changeWork = (title) => setOpenWork(title);

  const worksList = workData.map(entry => 
    <li key={entry.date + entry.title}>
      <WorkEntry
        title={entry.title}
        date={entry.date}
        tools={entry.tools}
        path={entry.path}
        opened={openWork == entry.title}
        onWorkChange={changeWork} 
        notes={entry.notes}
      />
    </li>
  );

  return <div className={styles.wrapper}>
    <h1>Works</h1> 
    <ul className="works-wrapper">
      {worksList}
    </ul>
  </div> 
}