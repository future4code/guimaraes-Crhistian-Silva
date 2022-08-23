export type CreateUserInput = {
    name: string;
    email: string;
    password: string;
  };
  

  export enum ROLE_TYPE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}