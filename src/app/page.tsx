import Creators from './components/Creators';
import styles from './page.module.scss';

export default function Home() {

  return (
    <main className={styles.main}>
      <Creators />
    </main>
  )
}
