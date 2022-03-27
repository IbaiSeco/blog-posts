import { IAuthor } from './IAuthor';
import { IComment } from './IComment';

export interface IPost {
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    id: string,
    authors: IAuthor[],
    comments: IComment[]
}