export type authenticationData = {
  id: string;
};

export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export type idsAuthenticationData = {
  id: string;
  idSender: string;
  idReceiver: string;
};

export type CreatePostInput = {
  photo: string;
  description: string;
  type: POST_TYPES;
  authorId: string;
};

export type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};

export type RelationsPostInput = {
  idSender: string;
  idReceiver: string;
};


