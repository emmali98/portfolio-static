import styles from '../../styles/page.module.scss';
import Link from 'next/link'
import Image from 'next/image'
import sunTrees from '../../public/sun-2.png';

export default function Page() {
  return (<div className={styles.wrapper}>
    <h1>Contact</h1>
    <p>I am open for freelance work at this time: animation, video editing, 
      front-end development, and illustration.
    </p>
    <p>You can reach me at my email <a href="mailto:emma.m.li.98@gmail.com">emma.m.li.98@gmail.com</a>,
      and (occasionally) on <Link href="https://www.linkedin.com/in/emmali98/">LinkedIn</Link>.
      </p>
    <Image src={sunTrees} alt="sun coming through trees" />
  </div>)
}