export type CreateUserInput = {
    name: string;
    email: string;
    password: string;
    role: ROLE_TYPE
  };
  

  export enum ROLE_TYPE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}