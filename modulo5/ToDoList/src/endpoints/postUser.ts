import { USER } from "../types/types";
import { codes, messages } from "../constants/statusCode";
import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { createUser } from "../constants/functions";

export const postUser = async (req: Request, res: Response) => {
  try {
    const { name, nickname, email }: USER = req.body;

    if (!name || !nickname || !email) {
      throw new Error(messages.MISSING_PARAMETERS);
    }

    const newUser: USER = {
      id: generateId(),
      name: name,
      nickname: nickname,
      email: email,
    };
    //ANTES DE CRIAR O USUÁRIO COLOQUEI UMA VERIFICAÇÃO DENTRO DA FUNÇÃO CREATEUSER PARA ENVIAR MENSAGEM DE ERRO SE OS DADOS QUE SÃO ÚNICOS JÁ CONSTAREM NO BANCO DE DADOS
    await createUser(newUser);
    res.status(codes.SUCCESS).send(messages.SUCCESS);
  } catch (error: any) {
    switch (error.message) {
      case messages.MISSING_PARAMETERS:
        res.status(codes.MISSING_PARAMETERS).send(messages.MISSING_PARAMETERS);
        break;
      case messages.NOT_IMPLEMENTED:
        res.status(codes.NOT_IMPLEMENTED).send(messages.NOT_IMPLEMENTED);
        break;
      case messages.NOT_IMPLEMENTED_NICKNAME:
        res
          .status(codes.NOT_IMPLEMENTED)
          .send(messages.NOT_IMPLEMENTED_NICKNAME);
        break;
      case messages.NOT_IMPLEMENTED_EMAIL:
        res.status(codes.NOT_IMPLEMENTED).send(messages.NOT_IMPLEMENTED_EMAIL);
        break;
      default:
        res.status(codes.SOME_ERROR).send(messages.SOME_ERROR);
    }
  }
};
