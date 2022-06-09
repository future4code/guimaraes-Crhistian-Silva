export const messages: { [key: string]: { status: number, message: string } } = {
    SUCCESS:{status: 200, message: "Solicitação concluída"},
    CREATED:{status: 201, message: "Criado com Sucesso"},
    AUTHORIZATION_NOT_FOUND: { status: 401, message: "Por favor verifique o Id do Usuário enviado no headers authorization." },
    NOT_ALLOWED:{status: 403, message: "Por Favor Verfique o Id do Produto enviado e tente novamente"},
    USERS_NOT_FOUND: { status: 404, message: "Usuários não encontrados" },
    USER_EXISTS: { status: 409, message: "Este Usuáriojá existe" },
    MISSING_PARAMETERS: { status: 422, message: "Informação faltando ou Incorreta. Consulte a documentação e preecha corretamente sua Requisição" },
    SOME_ERROR: { status: 500, message: "Algo deu errado" }
}
