import { POST_TYPES } from "./types";

export interface PostDTO{
    id?: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt?: Date,
    authorId: string
}