export const codes: number[] = [200, 201, 203, 401, 404];

type message = { [key: string]: { message: string } };

export const messages: message[] = [
  {
    CREATE: { message: "Usuário Criado Com Sucesso" },
  },
  {
    MODIFIED: { message: "Usuário Modificado Com Sucesso" },
  },
];
