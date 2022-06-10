
export const errors: { [key: string]: { status: number, message: string } } = {
    AUTHORIZATION_NOT_FOUND: { status: 401, message: "Por favor verifique o Id do Usuário enviado no headers authorization." },
    NOT_ALLOWED:{status: 403, message: "Por Favor Verfique o Id do Produto enviado e tente novamente"},
    PRODUCT_NOT_FOUND: { status: 404, message: "Produto não encontrado" },
    PRODUCT_EXISTS: { status: 409, message: "Este Produto já existe" },
    MISSING_PARAMETERS: { status: 422, message: "Informação faltando ou Incorreta. Consulte a documentação e preecha corretamente o Body da sua Requisição" },
    SOME_ERROR: { status: 500, message: "Algo deu errado" }
}

export const successMessages: {[key:string]: {status:number, message:string}} = {
    success: {
        status: 200,
        message: "Solicitação concluída"
    },
    created:{
        status: 201,
        message: "Criado com Sucesso"
    }

}