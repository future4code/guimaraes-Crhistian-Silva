export class CustomError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export class AuthorRecipeNotFound extends CustomError {
  constructor() {
    super(404, "Not Found, please verify AuthorId Sent");
  }
}
export class UserNotFound extends CustomError {
  constructor() {
    super(404, "Not Found, please verify ID User Sent");
  }
}

export class UserNotFoundEmail extends CustomError {
  constructor() {
    super(404, "Not Found, please verify Email User Sent");
  }
}

export class UserFollowdNotFound extends CustomError {
  constructor() {
    super(404, "Not Found, please verify ID Followd User Sent");
  }
}

export class RecipesNotFound extends CustomError {
  constructor() {
    super(404, "This User has no Recipes yet");
  }
}

export class RecipeIdNotFound extends CustomError {
  constructor() {
    super(404, "Not Found Recipe, please verify ID Recipe Sent");
  }
}

export class MissingParameters extends CustomError {
  constructor() {
    super(
      422,
      "Missing or incorrect information. Consult the documentation and correctly fill the Body of the Request"
    );
  }
}

export class MissingParametersLogin extends CustomError {
  constructor() {
    super(
      422,
      "Missing or incorrect information. Consult the documentation and fill email and password correctly"
    );
  }
}

export class MissingParametersToken extends CustomError {
  constructor() {
    super(
      422,
      "Missing Token. Consult the documentation and fill in headers authorization"
    );
  }
}

export class SameIdError extends CustomError {
  constructor() {
    super(401, "ID Sent value is the Same, Please verify and try again");
  }
}

export class AlreadyExists extends CustomError {
  constructor() {
    super(409, "Reported Relation already existing in the database");
  }
}

export class RelationsNotFound extends CustomError {
  constructor() {
    super(
      404,
      "Relations Not Found, please verify the ID USER Followd SENT and try again"
    );
  }
}

export class ErrorType extends CustomError {
  constructor() {
    super(405, "Invalid Type, please verify and try again");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(405, " Invalid Email, please verify and try again");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(405, " Invalid Password format, please verify and try again");
  }
}

export class InvalidToken extends CustomError {
  constructor() {
    super(401, " Invalid Token, please verify and try again");
  }
}

export class Unauthorized extends CustomError {
  constructor() {
    super(401, "User not Authorized");
  }
}

export class InvalidRole extends CustomError {
  constructor() {
    super(
      401,
      "Invalid Role format, must be 'NORMAL' OR 'ADMIN' verify and try again"
    );
  }
}

export class NotAllowed extends CustomError {
  constructor() {
    super(401, "Only 'NORMAL' users are allowed");
  }
}

export class NotAllowedFollow extends CustomError {
  constructor() {
    super(401, "You Don't follow yourself");
  }
}

export class NodeMailerError extends CustomError {
  constructor() {
    super(400, "Node_Mailer_Error");
  }
}

export class MissingEmail extends CustomError {
  constructor() {
    super(
      422,
      "Missing Email. Consult the documentation and fill in headers authorization"
    );
  }
}
