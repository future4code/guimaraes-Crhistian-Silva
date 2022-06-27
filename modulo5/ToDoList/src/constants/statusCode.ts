export const messages: {[key:string]: string} = 
  {
    SUCCESS: "Solicitação Concluída Com Sucesso",
    ACCEPTED: "Usuário Modificado Com Sucesso",
    SOME_ERROR: "Algo deu errado",
    NOT_FOUND: "Usuário não encontrado, confira o Id enviado nos parâmetros",
    MISSING_PARAMETERS: "Informações faltando ou Incorretas. Consulte a documentação e preencha corretamente o Body da sua Requisição.",
    NOT_IMPLEMENTED:  "Não permitido, um ou mais dados informados já existentes no banco de dados, verifique e tente novamente",
    NOT_IMPLEMENTED_EMAIL:  "Não permitido, EMAIL informado já existente no banco de dados, verifique e tente novamente",
    NOT_IMPLEMENTED_NICKNAME:  "Não permitido, NICKNAME informado já existente no banco de dados, verifique e tente novamente",
    NO_CONTENT: "Tarefa não encontrada, verifique o id enviado nos parâmetros",
    NOT_IMPLEMENTED_TASK: "Solicitação não aceita, confira o ID da tarefa enviado nos parâmetros,e tente novamente",
    NOT_IMPLEMENTED_RESPONSIBLE:"Solicitação não aceita, confira o ID do Responsável pela tarefa enviado nos parâmetros,e tente novamente"
  }
;

export const codes: {[key:string]: number} = 
  {
    SUCCESS: 200,
    ACCEPTED: 201,
    NO_CONTENT: 207,
    NOT_FOUND: 404,
    MISSING_PARAMETERS: 422,
    SOME_ERROR: 500,
    NOT_IMPLEMENTED: 501
  }

  export const messageStatus : { [key: string]: { status: number, message: string } } = {
    SUCCESS: { status: 200, message: "Solicitação concluída"},
    CREATED: {status: 201, message: "Usuário Criado com Sucesso"},
    ACCEPTED: {status: 202, message: "Sua Requisição foi Aceita"},
    NOT_MODIFIED: {status: 402, message: "Data de Pagamento Não Pode ser anterior que a data atual, verifique e tente novamente"},
    UNAUTHORIZED: { status: 401, message: "Por Favor Verfique se o Id do Usuário foi enviado corretamente e tente novamente" },
    FORBIDDEN:{status: 403, message:"Por favor verifique se sua identificação de permissão foi enviada no headers authorization, obrigatoriamente deve ser 'ADMIN' ou 'NORMAL'. "},
    NO_CONTENT: {status: 207, message: "Saldo insuficiente, adicione saldo a sua conta primeiro e tente novamente"},
    NOT_FOUND: { status: 404, message: "Usuário não encontrado" },
    NOT_ALLOWED: {status: 405, message: "Não Permitido, Usuário menor de 18 anos"},
    USER_EXISTS: { status: 409, message: "Este CPF de  Usuário já existe em nosso cadastro, verifique e tente novamente" },
    MISSING_PARAMETERS: { status: 422, message: "Informações faltando ou Incorretas. Consulte a documentação e preencha corretamente o Body da sua Requisição" },
    SOME_ERROR: { status: 500, message: "Algo deu errado" },
    NOT_IMPLEMENTED: {status: 501, message: "Não permitido, data futura informada não é permitida para essa ação, verifique e tente novamente"}
}

