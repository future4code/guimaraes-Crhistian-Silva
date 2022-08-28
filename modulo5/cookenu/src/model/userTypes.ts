export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role: ROLE_TYPE;
}

export enum ROLE_TYPE {
  ADMIN = "admin",
  NORMAL = "normal",
}

export interface LoginInput {
  email: string;
  password: string;
  token: string;
}

export interface UserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  role: ROLE_TYPE;
}

export interface UserProfile {
  id: string;
  email: string;
}

export interface FollowInput {
  idFollowd: string;
  token: string;
}

export interface UnFollowInput {
  userUnfollowId: string;
  token: string;
}

export interface FollowDTO {
  id: string;
  idFollower: string;
  idFollowd: string;
}

export interface FeedInput {
  idFollowd: string;
  token: string;
}

export type BusinessFeedInput = {
  idFollowd: string;
  offset: number;
  limit: number;
  token: string;
};

export type FeedDTO = {
  idFollowd: string;
  offset: number;
  limit: number;
};

export interface AccountInput {
  token: string;
  email: string;
  password: string;
}

export interface AuthenticationData {
  id: string;
  role: ROLE_TYPE;
}

export interface PasswordInput {
  token: string;
  id: string;
  password: string;
}

export interface UserFeedDTO {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  userId: string;
  userName: string;
}
