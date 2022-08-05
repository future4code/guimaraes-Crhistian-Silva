import { POST_TYPES } from "./types";

export interface postInputDTO{
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt?: Date,
    authorId: string
}