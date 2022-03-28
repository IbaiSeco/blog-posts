import type { NextPage } from 'next'

// Importing application pages
import PostsPage from './posts';

const Home: NextPage = () => {
  return (
    <div>
      <PostsPage />
    </div>
  )
}

export default Home
