export interface CreateUserInput {
    name: string;
    email: string;
    password: string;
    role: ROLE_TYPE
  };
  
  export enum ROLE_TYPE {
    ADMIN = "admin",
    NORMAL = "normal"
}

export interface LoginInput {
  email: string,
  password: string,
}

export interface UserDTO{
  id: string,
  name: string,
  email: string,
  password: string,
  role: ROLE_TYPE
}

export interface UserProfile{
  id: string,
  email: string
}