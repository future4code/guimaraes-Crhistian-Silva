import { Request, Response } from "express";
import { ModalityBusiness } from './../business/ModalityBusiness';

import { ModalityInput } from "../model/modalityTypes";
import { validateCompetitionInput, validateModalityInput } from "./ModalityControllerSerializer";
import { BaseDatabase } from "../data/Basedatabase";

export class ModalityController {
  constructor(private modalityBusiness: ModalityBusiness){}

  public createCompetition = async (req: Request, res: Response): Promise<void> => {

    try {
      const message = "SUCESS, COMPETITION CREATED";

      const input: any = {
        name: req.body.name,
        status: req.body.status
      };
      
      validateCompetitionInput(input)
      await this.modalityBusiness.createCompetition(input)

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
    await BaseDatabase.destroyConnection();
  };
  
  public createModality = async (req: Request, res: Response): Promise<void> => {

    try {
      const message = "SUCESS, MODALITY CREATED";

      const input: ModalityInput = {
        name: req.body.name,
        athleteName: req.body.athleteName,
        value: req.body.value,
        unity: req.body.unity,
      };
      
      validateModalityInput(input)
      await this.modalityBusiness.createModality(input)

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
    await BaseDatabase.destroyConnection();
  };

  public getRanking = async (req: Request, res: Response): Promise<void> => {
    try {
      const modality = req.params.modality


      const result = await this.modalityBusiness.getRanking(modality);

      res.status(200).send(result);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };
}
