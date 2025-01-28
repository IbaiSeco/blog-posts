# Blog post
#### by Ibai Seco

### Notes on Implementation

I created custom functional components for the post card, comment card, and user avatar and they can be accessed from '@src/components'. Each of these components has a respective interface: IPost, IComment, and IAuthor and they can be found in '@src/libs/interfaces'. I used `styled-components` to help style these components as well as the `react-bootstrap` design-kit.

The api fetch call to the url provided can be seen in '@src/libs/apiLib' I then use a custom pagination hook that accepts the sorted data and modifies it into pages as desired. The use of this hook and the React-Query hook that calls the 'getPosts' function can be seen in action in the posts.tsx page in '@src/pages'.

### Setup and Testing

To install required node packages run:

```console
foo@bar:~$ npm install
```

To run unit/component tests:

```console
npm run test
```

### Initializing local env

To start the application run:

```console
foo@bar:~$ npm run dev
```
