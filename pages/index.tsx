import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Pixels Blog</title>
        <meta name="description" content="A blog built with Nextjs, GraphQL and Firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Next.js app with Firebase</h2>
      </main>

    </div>
  )
}

export default Home
