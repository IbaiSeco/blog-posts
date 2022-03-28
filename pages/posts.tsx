// ******************************************************
// posts.tsx renders pages of blog posts of max-length: 5 
// ******************************************************

import React, { FC } from 'react';
import Head from 'next/head'
import { useQuery } from 'react-query'

// Importing react-bootstrap as design-kit
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

// Importing application styles, components, and interfaces
import styles from '../styles/Home.module.css'
import Post from '../components/post';
import { IPost } from '../libs/interfaces/IPost';
import usePages from '../hooks/usePagination';

// Importing async function that fetches and returns posts
import { getPosts } from '../libs/apiLib';

// Main blog post page
const PostsPage: FC = () => {

    // Using hooks to access api data and use pagination tools
    const {isLoading, isError, data, error } = useQuery<IPost[], Error>('posts', getPosts);
    const {resultPosts, nextPosts, prevPosts, isNextAvailable, isPrevAvailable} = usePages(data);

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
                {resultPosts?.map(element => (
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
            </div>

            <div className={styles.footer}>
                <Stack direction="horizontal" gap={2}>
                    <div>
                        <Button 
                            variant="outline-primary" 
                            onClick={prevPosts} 
                            disabled={!isPrevAvailable}
                        >
                            Previous
                        </Button>
                    </div>
                    <div>
                        <Button 
                            variant="outline-primary" 
                            onClick={nextPosts} 
                            disabled={!isNextAvailable}
                        >
                            Next
                        </Button>
                    </div>
                </Stack>
            </div>
        </div>
    </>
}

export default PostsPage;