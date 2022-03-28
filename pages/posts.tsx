// ******************************************************
// posts.tsx renders pages of blog posts of max-length: 5 
// ******************************************************

import React, { FC } from 'react';
import Head from 'next/head'
import { useQuery } from 'react-query'

// Importing react-bootstrap as design-kit
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';

// Importing application styles, components, and interfaces
import styles from '../styles/Home.module.css'
import Post from '../components/post';
import { IPost } from '../libs/interfaces/IPost';

// Importing async function that fetches and returns posts
import { getPosts } from '../libs/apiLib';

// type PostArray = {
//     posts: IPost[]
// }

const PostsPage: FC = () => {

    const [page, setPage] = React.useState(0);
    const {isLoading, isError, data, error } = useQuery<IPost[], Error>('posts', getPosts);

    if (isLoading) {
        return <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        The Blog
                    </h1>
                </div>
                <div className={styles.pageContent}>
                    <Spinner animation="border" variant="primary" />
                </div>
            </div>
        </>
    }

    if (isError) {
        return <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        The Blog
                    </h1>
                </div>
                <div className={styles.pageContent}>
                    <p>{ error }</p>
                </div>
            </div>
        </>
    }

    console.log(data);

    return <>
        <div className={styles.container}>
            <Head>
                <title>The Blog</title>
                <meta name="description" content="Displaying blog posts from an API" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.header}>
                <h1 className={styles.title}>
                    The Blog
                </h1>
            </div>

            <div className={styles.pageContent}>
                {/* {console.log(data)} */}
                {data?.map(element => (
                    <div key={element.id} style={{paddingTop: "20px"}}>
                        <Post 
                            title={element.title} 
                            description={element.description}
                            createdAt={element.createdAt}
                            updatedAt={element.updatedAt}
                            id={element.id}
                            authors={element.authors}
                            comments={element.comments}
                        />
                    </div>
                ))}
                {/* {console.log(data?.posts)} */}
            </div>

            <div>
                {/* <Pagination>{pages}</Pagination> */}
            </div>
        </div>
    </>
}

export default PostsPage;