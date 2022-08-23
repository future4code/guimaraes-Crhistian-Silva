export class CustomError extends Error {
  constructor(public status: number, 
   message: string) {
    super(message);
  }
}

export class UserNotFound extends CustomError{
  constructor(){
    super(404, "Not Found, please verify ID User Sent")
  }
}

export class PostNotFound extends CustomError{
  constructor(){
    super(404, "Not Found, please verify ID Post Sent")
  }
}

export class LikeNotFound extends CustomError{
  constructor(){
    super(404, "LIKE Not Found, please verify the ID POST SENT  and try again")
  }
}

export class MissingParameters extends CustomError{
  constructor(){
    super(422,  "Missing or incorrect information. Consult the documentation and correctly fill the Body of the Request")
  }
}

export class SameIdError extends CustomError{
  constructor(){
    super(401, "ID Sent value is the Same, Please verify and try again")
  }
}

export class AlreadyExists extends CustomError{
  constructor(){
    super(409, "Reported Relation already existing in the database")
  }
}

export class RelationsNotFound extends CustomError{
  constructor(){
    super(404, "Relations Not Found, please verify the ID USER SENT  and try again")
  }
}

export class ErrorType extends CustomError{
  constructor(){
    super(405,"Invalid Type, please verify and try again" )
  }
}

export class InvalidEmail extends CustomError{
  constructor(){
    super(405," Invalid Email, please verify and try again" )
  }
}

export class InvalidPassword extends CustomError{
  constructor(){
    super(405," Invalid Password format, please verify and try again")
  }
}


export class Unauthorized extends CustomError {
  constructor() {
    super(401, "User not Authorized");
  }
}