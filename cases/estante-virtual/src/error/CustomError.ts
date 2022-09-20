export class CustomError extends Error {
  constructor(public status: number, message: string) {
    super(message);
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


export class ModalityNotFound extends CustomError {
  constructor() {
    super(404, "Not Found Ranking in this Modality, please verify, and try again");
  }
}

export class CompetitionNotFound extends CustomError {
  constructor() {
    super(404, "Not Found Competition, please verify, and try again");
  }
}

export class CompetitionClosed extends CustomError {
  constructor() {
    super(401, "Not Modified, this competition already closed, please verify and try again");
  }
}


export class CompetitionNotStarted extends CustomError {
  constructor() {
    super(401, "Not Started, this competition not started yet, please verify and try again");
  }
}