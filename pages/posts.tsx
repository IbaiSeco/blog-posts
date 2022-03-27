import React from 'react';
import { FC } from 'react';

import Head from 'next/head'
import { useQuery, UseQueryResult } from 'react-query'

import Pagination from 'react-bootstrap/Pagination';

import styles from '../styles/Home.module.css'
import Post from '../components/post';
import { IPost } from '../libs/interfaces/IPost';
import { Spinner } from 'react-bootstrap';

type PostArray = {
    posts: IPost[]
}

// type PagedPostArray = {
//     items: IPost[][]
// }

async function getPosts() {
    const response = await fetch('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts');
    if (!response.ok) {
        throw new Error("Problem fetching data");
    }
    const posts = await response.json();
    
    // Sorting results by date (descending)
    posts.sort(function(a: IPost, b: IPost){
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    });
    // var pagedPostArray = [];
    // var pageSize = 5;

    // for (var i = 0; i < posts.length; i+pageSize) {
    //     var postArrayItem = posts.splice(i, i+pageSize);
    //     pagedPostArray.push(postArrayItem);
    // }

    // console.log(pagedPostArray);

    // ************* Making sure type is correct 
    // assertIsCharacter(character);

    return posts;
    // return pagedPostArray;
}

// function assertIsPost(character: any): asserts character is Character {
//     if (!("name" in character)) {
//       throw new Error("Not character");
//     }
//   }

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