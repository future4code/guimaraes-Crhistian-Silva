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
