export const StatusCodes: {
    [key: string]: { status: number; message: string };
  } = {
    UNAUTHORIZED: {
      status: 401,
      message: "Please Verify the ID Author Sent ",
    },
    ID_ERROR: {
      status: 401,
      message: "ID Sent value is the Same, Please verify and try again"
    },
    NOT_FOUND_USERS:{status: 404, message: "Users Not Found, please verify the ID SENT and try again"},
    NOT_FOUND_ID:{status: 404, message: "Not Found, please verify the ID SENT and try again"},
    NOT_FOUND_POST: {status: 404, message: "Posts Not Found, please verify the ID SENT and try again"},
    NOT_FOUND_RELATIONS: {status: 404, message: "Relations Not Found, please verify the ID USER SENT  and try again"},
    NOT_FOUND_LIKE: {status: 404, message: "LIKE Not Found, please verify the ID POST SENT  and try again"},
    NOT_ACCEPTABLE:{status: 406, message: " POST already unliked"},
    TYPE_ERROR: {status: 405, message: " Invalid Type, please verify and try again" },
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
      message: "Reported Relation already existing in the database",
    },
    MISSING_PARAMETERS: {
      status: 422,
      message:
        "Missing or incorrect information. Consult the documentation and correctly fill the Body of the Request",
    },
    SOME_ERROR: { status: 500, message: "Something went wrong" },
  };
  