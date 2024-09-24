import styles from '../../styles/page.module.scss';
import Image from 'next/image';
import morningFrost from '../../public/past.png';

export default function Page() {
  return (<div className={styles.wrapper}>
    <Image src={morningFrost} alt="illustration of early dawn forest" />
    <h1>About</h1>
    <p>Emma Li is an artist (and has worn the hats of animator, writer, and software developer at 
      various times). Hailing from rural Wisconsin and currently based out of Cambridge, Massachusetts, 
      she is interested in visual storytelling and the execution of designs with an eye for both the artistic 
      and the technical.
    </p>
  </div>)
}