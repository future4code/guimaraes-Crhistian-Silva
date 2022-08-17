export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome inválido");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida");
  }
}

export class MissingParameters extends CustomError {
  constructor() {
    super(422, 'Preencha os campos "name","nickname", "email" e "password"');
  }
}

export class MissingParametersLogin extends CustomError {
  constructor() {
    super(422, 'Preencha os campos  "email" e "password"');
  }
}

export class MissingParametersToken extends CustomError {
  constructor() {
    super(422, 'Preencha o Token no headers authorization corretamente');
  }
}

export class UserNotFound extends CustomError {
  constructor() {
    super(404, "Usuário não encontrado");
  }
}


export class Unauthorized extends CustomError {
  constructor() {
    super(401, "Usuário não autorizado");
  }
}