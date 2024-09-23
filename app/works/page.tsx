import WorkEntry from '@/components/work-entry.jsx';
import workData from '../../public/works-data.jsx';

export default function Page() {
  const worksList = workData.map(entry => 
      <li key={entry.path}>
        <WorkEntry
          title={entry.title}
          date={entry.date}
          tools={entry.tools}
          path={entry.path}
        />
      </li>
    );

    return <>
      <h1>Works</h1> 
      <ul className="works-wrapper">
        {worksList}
      </ul>
    </> 
  }