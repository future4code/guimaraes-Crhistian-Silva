type Err = {
  status: number,
  message: string
}

type statusCodeType = Record <string, Err>


export const StatusCodes: {
    [key: string]: { status: number; message: string };
  } = {
    UNAUTHORIZED: {
      status: 401,
      message: " MISSING PARAMETERS, PLEASE VERIFY THE ID SENT ",
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
    ALREADY_EXISTS: {
      status: 409,
      message: "Reported data already existing in the database",
    },
    MISSING_PARAMETERS: {
      status: 422,
      message:
        "Missing or incorrect information. Consult the documentation and correctly fill in the body of the request",
    },
    SOME_ERROR: { status: 500, message: "Something went wrong" },
    VIA_CEP_ERROR: {status: 404, message: "Something went wrong on yours address requisition "},
    NODE_MAILER_ERROR :{status: 404, message: "Something went wrong on yours nodemailer requisition "},
  };
  