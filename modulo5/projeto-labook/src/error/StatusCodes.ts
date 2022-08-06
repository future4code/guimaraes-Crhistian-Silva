export const StatusCodes: {
    [key: string]: { status: number; message: string };
  } = {
    UNAUTHORIZED: {
      status: 401,
      message: "Please Verify the ID Author Sent ",
    },
    NOT_FOUND:{status: 404, message: "Users Not Found, please verify the ID USER SENT and try again"},
    NOT_FOUND_POST: {status: 404, message: "Posts Not Found, please verify the ID POST SENT and try again"},
    FORBIDDEN: {
      status: 403,
      message:
        " Please verify if your ID was sent on headers authorization, it must be 'ADMIN' or 'NORMAL'. ",
    },
    NAME_ERROR: {
      status: 405,
      message: " NAME already exists in database, please verify and try again",
    },
    EMAIL_ERROR: {
      status: 405,
      message: " Invalid Email, please verify and try again",
    },
    PASSWORD_ERROR: {
      status: 405,
      message:
        " Invalid Password format, please verify and try again",
    },
    ID_POST_ERROR: {
      status: 405,
      message: "Invalid Id Post, please verify and try again"
    },
    ALREADY_EXISTS: {
      status: 409,
      message: "Reported data already existing in the database",
    },
    MISSING_PARAMETERS: {
      status: 422,
      message:
        "Missing or incorrect information. Consult the documentation and correctly fill the Body of the Request",
    },
    SOME_ERROR: { status: 500, message: "Something went wrong" },
  };
  