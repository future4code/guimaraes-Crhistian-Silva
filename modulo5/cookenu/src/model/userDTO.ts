import { ROLE_TYPE } from "./userTypes";

export interface UserDTO{
    id: string,
    name: string,
    email: string,
    password: string,
    role: ROLE_TYPE | undefined
}