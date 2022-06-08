
export const messageStatus : { [key: string]: { status: number, message: string } } = {
    SUCCESS: { status: 200, message: "Solicitação concluída"},
    CREATED: {status: 201, message: "Usuário Criado com Sucesso"},
    ACCEPTED: {status: 202, message: "Sua Requisição foi Aceita"},
    AUTHORIZATION_NOT_FOUND: { status: 401, message: "Por Favor Verfique se o Id do Usuário foi enviado corretamente e tente novamente" },
    FORBIDDEN:{status: 403, message:"Por favor verifique se sua identificação de permissão foi enviada no headers authorization, obrigatoriamente deve ser formada por letras."},
    NOT_FOUND: { status: 404, message: "Usuários não encontrados" },
    PRODUCT_EXISTS: { status: 409, message: "Este Produto já existe" },
    MISSING_PARAMETERS: { status: 422, message: "Informação faltando ou Incorreta. Consulte a documentação e preencha corretamente o Body da sua Requisição" },
    SOME_ERROR: { status: 500, message: "Algo deu errado" }
}

