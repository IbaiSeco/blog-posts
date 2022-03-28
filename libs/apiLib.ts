import { IPost } from './interfaces/IPost';

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

    return posts;
}

export { getPosts }