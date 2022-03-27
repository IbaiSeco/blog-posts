import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import PostsPage from './posts';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <PostsPage />
    </div>
  )
}

export default Home
