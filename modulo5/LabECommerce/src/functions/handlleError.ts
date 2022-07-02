export const handlleError = (
  res: any,
  error: any,
  messages: { [key: string]: { status: number; message: string } }
) => {
  res
    .status(messages[error.message].status)
    .send(messages[error.message].message);
};
