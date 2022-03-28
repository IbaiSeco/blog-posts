// *****************************************************
// Custom pagination hook to return a maximum of 5 posts
// and to be able to sort through the pages smoothly
// *****************************************************

import React, { useState, useEffect } from 'react';
import { IPost } from "../libs/interfaces/IPost"

const usePages = (initialPosts: IPost[] | undefined = [], initialPage = 0) => {
    // const variable declaration
    const [page, setPage] = useState(initialPage)
    const [isNextAvailable, setIsNextAvailable] = useState(true)
    const [isPrevAvailable, setIsPrevAvailable] = useState(false)
    const LIMIT_PAGINATION = 5;
    const PAGINATION_MAX = initialPosts ? Math.ceil(initialPosts.length / LIMIT_PAGINATION) : 0;
    
    // allows to split data into pages of length 5
    const splitIntoPages = (posts: IPost[], pagesMax: number): IPost[][] => { 
        const postsLength = posts.length;
        let tempPost: IPost[][] = [];
        for (let i=0; i < postsLength; i += pagesMax) {
            tempPost = [...tempPost, posts.slice(i, i + pagesMax)];
        }   
        return tempPost;
    }

    let resultPosts: IPost[] = splitIntoPages(initialPosts, LIMIT_PAGINATION)[page];

    useEffect(()=> {
        (page + 1 !== PAGINATION_MAX) ? setIsNextAvailable(true) : setIsNextAvailable(false);
        (page - 1 >= 0) ? setIsPrevAvailable(true) : setIsPrevAvailable(false);
    }, [page, PAGINATION_MAX])
    
    const nextPosts = () => {
        if (page + 1 !== PAGINATION_MAX) {
            setPage(page + 1)
        }
    }

    const prevPosts = () => {
        if (page - 1 >= 0) {
            setPage(page - 1)
        }
    }

    return {resultPosts, nextPosts, prevPosts, isNextAvailable, isPrevAvailable}
}
    
export default usePages;