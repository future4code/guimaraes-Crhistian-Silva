import { messageStatus } from "../constants/statusCodes";

export const handlleError = (
  res: any,
  error: any
) => {
  error.sqlMessage? res.status(500).send(error.sqlMessage): 
  res
    .status(messageStatus[error.message].status)
    .send(messageStatus[error.message].message);
};
