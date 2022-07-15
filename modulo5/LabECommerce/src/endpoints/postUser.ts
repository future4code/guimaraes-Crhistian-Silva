import { mailTransporter } from "./../services/mailTransporter";
import { USER, USER_BODY } from "../types/types";
import { messageStatus } from "../constants/statusCodes";
import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { createUser } from "../functions/createUser";
import { handlleError } from "../functions/handlleError";
import { getAdrressInfo } from "../services/getAddressInfo";

export const postUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, zipcode }: USER_BODY = req.body;
    const address = await getAdrressInfo(zipcode);

    if (!name || !email || !password || !zipcode) {
      throw new Error("MISSING_PARAMETERS");
    }

    const newUser: USER = {
      id: generateId(),
      name,
      email,
      password,
      address,
    };
    //ANTES DE CRIAR O USUÁRIO COLOQUEI UMA VERIFICAÇÃO DENTRO DA FUNÇÃO CREATEUSER PARA ENVIAR MENSAGEM DE ERRO SE OS DADOS QUE SÃO ÚNICOS JÁ CONSTAREM NO BANCO DE DADOS
    await createUser(newUser);
    
    //TIVE QUE TRANSFORMAR ESSA EMAILINFO  EM FUNÇÃO ASYNC PORQUE QUANDO DÁ ALGUM ERRO DE NODEMAILER, ELA CRIA O USUÁRIO MAS FICA EM LOOP E NÃO ENCERRAVA A REQUISIÇÃO

    const sendConfirmationEmail = async (email: string, name: string) => {
      try {
        await mailTransporter.sendMail({
          from: "<submit-backend-crhis@hotmail.com>",
          to: email,
          subject: "Cadastro Efetuado",
          text: "BOAS VINDAS !!!!",
          html: `<p> " Olá ${name}, Seu Cadastro Foi concluído com Sucesso"</p>`,
        });
        
      } catch (error:any) {
        throw new Error("NODE_MAILER_ERROR")
      }     
    };
    sendConfirmationEmail(email,name)
    res
      .status(messageStatus.CREATED_USER.status)
      .send(messageStatus.CREATED_USER.message);
  } catch (error: any) {
    handlleError(res, error);
  }
};
