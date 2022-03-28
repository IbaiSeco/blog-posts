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

export { getPosts }