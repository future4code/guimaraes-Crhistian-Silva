export const messageStatus: {
  [key: string]: { status: number; message: string };
} = {
  SUCCESS: { status: 200, message: "Request Completed" },
  CREATED: { status: 201, message: "User created successfully" },
  ACCEPTED: { status: 202, message: "Your request has been accepted" },
  UNAUTHORIZED: {
    status: 401,
    message: "Please verify if your ID was sent on headers authorization",
  },
  NOT_FOUND:{status: 404, message: "Users Not Found, please verify the ID USER SENT and try again"},
  NOT_FOUND_PRODUCT: {status: 404, message: "Product Not Found, please verify the ID PRODUCT SENT and try again"},
  FORBIDDEN: {
    status: 403,
    message:
      " Please verify if your ID was sent on headers authorization, it must be 'ADMIN' or 'NORMAL'. ",
  },
  NOT_IMPLEMENTED_NAME: {
    status: 404,
    message: " NAME already exists in database, please verify and try again",
  },
  NOT_IMPLEMENTED_EMAIL: {
    status: 404,
    message: " EMAIL already exists in database, please verify and try again",
  },
  NOT_IMPLEMENTED_PASSWORD: {
    status: 404,
    message:
      " PASSWORD already exists in database, please verify and try again",
  },
  ALREADY_EXISTS: {
    status: 409,
    message: "Reported data already existing in the database",
  },
  MISSING_PARAMETERS: {
    status: 422,
    message:
      "Missing or incorrect information. Consult the documentation and correctly fill in the body of the sa request",
  },
  SOME_ERROR: { status: 500, message: "Something went wrong" },
};
