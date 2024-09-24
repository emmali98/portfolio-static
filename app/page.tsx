import styles from '../styles/page.module.scss';
import Image from 'next/image';
import introPic from '../public/mini-bunker.png';

export default function Page() {
    return (
      <div className={styles.wrapper}>
        <Image src={introPic} alt="drawing of the sun through trees" />
        <h1>a mini portfolio</h1>
      </div>
    )
  }