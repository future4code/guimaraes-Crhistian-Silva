import { USER } from "../types/types";
import {messageStatus} from "../constants/statusCodes"
import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { createUser } from "../functions/createUser";
import {handlleError} from "../functions/handlleError"

export const postUser = async (req: Request, res: Response) => {
  try {
    const { name,  email, password }: USER = req.body;

    if (!name || !email || !password) {
      throw new Error("MISSING_PARAMETERS");
    }

    const newUser: USER = {
      id: generateId(),
      name,
      email,
      password,
    };
    //ANTES DE CRIAR O USUÁRIO COLOQUEI UMA VERIFICAÇÃO DENTRO DA FUNÇÃO CREATEUSER PARA ENVIAR MENSAGEM DE ERRO SE OS DADOS QUE SÃO ÚNICOS JÁ CONSTAREM NO BANCO DE DADOS
    await createUser(newUser);
    res.status(messageStatus.SUCCESS.status).send(messageStatus.SUCCESS.message);
  } catch (error: any) {
    handlleError(res, error);
  }
};
