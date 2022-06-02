import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <a href="/first">Primer ejemplo</a>
      </div>
      <div>
        <Link href="/second">
          <a>Segundo ejemplo</a>
        </Link>
      </div>
      <div>
        <Link href="/third">
          <a>Tercer ejemplo</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
