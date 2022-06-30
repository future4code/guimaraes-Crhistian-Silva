import { EDITUSER } from "./../types/types";
import { codes, messages } from "../constants/statusCode";
import { Request, Response } from "express";
import { editUser, getUserData } from "../constants/functions";

export const editUserById = async (req: Request, res: Response) => {
  try {
    const idUser: string = req.params.id;
    const bodyUser: EDITUSER = req.body;

    if (!idUser) {
      throw new Error(messages.MISSING_PARAMETERS);
    }

    if (!bodyUser.name || !bodyUser.nickname) {
      throw new Error(messages.MISSING_PARAMETERS);
    }
    //ANTES DE FAZER A MODIFICAÇÃO, FAÇO UMA VERIFICAÇÃO DE DADOS PARA VER SE OS DADOS ENVIADOS SÃO OS MESMOS QUE JÁ ESTÃO
    const user = await getUserData(idUser);

    if (!user) {
      throw new Error(messages.NOT_FOUND);
    }

    if (user.name === bodyUser.name || user.nickname === bodyUser.nickname) {
      throw new Error(messages.NOT_IMPLEMENTED);
    } else {
      editUser(idUser, bodyUser);
    }

    res.status(codes.SUCCESS).send(messages.ACCEPTED);
  } catch (error: any) {
    switch (error.message) {
      case messages.MISSING_PARAMETERS:
        res.status(codes.MISSING_PARAMETERS).send(messages.MISSING_PARAMETERS);
        break;
      case messages.NOT_FOUND:
        res.status(codes.NOT_FOUND).send(messages.NOT_FOUND);
        break;
      case messages.NOT_IMPLEMENTED:
        res.status(codes.NOT_IMPLEMENTED).send(messages.NOT_IMPLEMENTED);
        break;
      default:
        res.status(codes.SOME_ERROR).send(messages.SOME_ERROR);
    }
  }
};
