import { messageStatus } from "../constants/statusCodes";
import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { createProduct } from "../functions/createProduct";
import { PRODUCT_BODY } from "../types/types";
import { handlleError } from "../functions/handlleError";

export const postProduct = async (req: Request, res: Response) => {
  try {
    //COLOQUEI PRA RECEBER MAIS PROPRIEDADES DO BODY COMO OPCIONAIS, A FUNÇÃO FUNCIONA INDEPENDENTE DE RECEBER TODOS OS DADOS

    const prodData: PRODUCT_BODY = req.body;

    if (!prodData.name || !prodData.price || !prodData.imageUrl) {
      throw new Error("MISSING_PARAMETERS");
    }

    const newProduct:any = {
      id: generateId(),
      name: prodData.name,
      price: prodData.price,
      image_url: prodData.imageUrl,
      rating: prodData.rating,
      description: prodData.description,
      brand: prodData.brand,
      category: prodData.category,
      stock: prodData.stock,
    };

    //ANTES DE CRIAR O PRODUTO COLOQUEI UMA VERIFICAÇÃO DENTRO DA FUNÇÃO PARA ENVIAR MENSAGEM DE ERRO SE OS DADOS DO TITLE JÁ CONSTAREM NO BANCO DE DADOS, PRA NÃO HAVER REPETIÇÃO DE NOME DE PRODUTOS
    await createProduct(newProduct);
    res
      .status(messageStatus.CREATED_PRODUCT.status)
      .send(messageStatus.CREATED_PRODUCT.message);
  } catch (error: any) {
    handlleError(res, error);
  }
};
