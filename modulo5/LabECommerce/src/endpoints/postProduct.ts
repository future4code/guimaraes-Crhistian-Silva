import { messageStatus } from "../constants/statusCodes";
import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { createProduct } from "../functions/createProduct";
import { handlleError } from "../functions/handlleError";
import { PRODUCT } from "../types/types";

export const postProduct = async (req: Request, res: Response) => {
  try {
    //COLOQUEI PRA RECEBER MAIS PROPRIEDADES DO BODY COMO OPCIONAIS, A FUNÇÃO FUNCIONA INDEPENDENTE DE RECEBER TODAS AS PROPRIEDADES PELO BODY OU NÃO

    const prodData: PRODUCT = req.body;

    if (!prodData.name || !prodData.price || !prodData.image_url) {
      throw new Error("MISSING_PARAMETERS");
    }

    const newProduct: PRODUCT = {
      id: generateId(),
      name: prodData.name,
      price: prodData.price,
      image_url: prodData.image_url,
      rating: prodData.rating,
      description: prodData.description,
      brand: prodData.brand,
      category: prodData.category,
      stock: prodData.stock,
    };

    //ANTES DE CRIAR O PRODUTO COLOQUEI UMA VERIFICAÇÃO DENTRO DA FUNÇÃO PARA ENVIAR MENSAGEM DE ERRO SE OS DADOS DO TITLE JÁ CONSTAREM NO BANCO DE DADOS, PRA NÃO HAVER REPETIÇÃO DE NOME DE PRODUTOS
    await createProduct(newProduct);
    res
      .status(messageStatus.SUCCESS.status)
      .send(messageStatus.SUCCESS.message);
  } catch (error: any) {
    handlleError(res, error, messageStatus);
  }
};
