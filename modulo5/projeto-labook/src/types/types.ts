export type authenticationData = {
    id: string
 }
 
 export  type user = {
    id?: string,
    name: string,
    email: string,
    password: string
 }
 
 export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 export type post = {
    id?: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt?: Date,
    authorId: string
 }