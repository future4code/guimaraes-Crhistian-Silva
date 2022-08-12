import { POST_TYPES } from "./postTypes";

export interface PostDTO{
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt?: Date | number| string,
    authorId: string
}