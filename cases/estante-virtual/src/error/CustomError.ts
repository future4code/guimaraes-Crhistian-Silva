export class CustomError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export class BandIdNotFound extends CustomError {
  constructor() {
    super(404, "Not Found Band, please verify ID Band Sent");
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

export class InvalidRole extends CustomError {
  constructor() {
    super(
      401,
      "Invalid Role format, must be 'NORMAL' OR 'ADMIN' verify and try again"
    );
  }
}

export class InvalidRoleBand extends CustomError {
  constructor() {
    super(
      401,
      "Invalid Role format, must be  'ADMIN' verify and try again"
    );
  }
}

export class InvalidToken extends CustomError {
  constructor() {
    super(401, " Invalid Token, please verify and try again");
  }
}

export class InvalidHours extends CustomError {
  constructor() {
    super(401, " Invalid Hours Format, must be between '08:00- 23:00' hr and a full time, it´s example of wrong time:'08:15 por 23:30'");
  }
}

export class InvalidDate extends CustomError {
  constructor() {
    super(401, " Invalid Date Format, must be Friday, Saturday or Sunday,");
  }
}

export class ShowAlready extends CustomError {
  constructor() {
    super(401, " Invalid Date, there is already a show This Band scheduled for this date");
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

export class NodeMailerError extends CustomError {
  constructor() {
    super(400, "Node_Mailer_Error");
  }
}


export class ShowsNotFound extends CustomError {
  constructor() {
    super(404, "Not Found Shows, please verify Day Show Sent");
  }
}

export class ModalityNotFound extends CustomError {
  constructor() {
    super(404, "Not Found Ranking in this Modality, please verify");
  }
}
