export type user = {
    id: string
    email: string
    password: string
    name: string
    nickname: string
    role:string
 }

 export interface SignUp{
    email: string,
    password: string
 }
 
 export interface UserInputDTO {
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: string
 }
 
 export interface EditUserInputDTO {
    name: string,
    nickname: string,
    id: string
 }
 
 export interface EditUserInput {
    name: string,
    nickname: string,
    id: string
 }

 export interface LoginInput {
   email: string,
   password: string,
}

export type UserResult =  {
   id: string,
   email: string   
}

export type AuthenticationData = {
   id: string,
   role: string,
 }