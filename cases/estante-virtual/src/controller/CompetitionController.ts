import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionInput } from "../model/competitionTypes";

import { ModalityInput } from "../model/modalityTypes";
import { validateCompetitionInput, validateModalityInput } from "./CompetitionControllerSerializer";

export class CompetitionController {
  constructor(private competitionBusiness: CompetitionBusiness){}

  public createCompetition = async (req: Request, res: Response): Promise<void> => {

    try {
      const message = "SUCESS, COMPETITION CREATED";

      const input: CompetitionInput = {
        name: req.body.name,
        status: req.body.status
      };
      
      validateCompetitionInput(input)
      await this.competitionBusiness.createCompetition(input)

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public getCompetition = async (req: Request, res: Response): Promise<void> => {
    try {
      const name = req.params.name

      const result = await this.competitionBusiness.getCompetition(name);

      res.status(200).send(result);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };
  
  public createModality = async (req: Request, res: Response): Promise<void> => {

    try {
      const message = "SUCESS, MODALITY CREATED";

      const input: ModalityInput = {
        competitionName: req.body.name,
        athleteName: req.body.athleteName,
        value: req.body.value,
        unity: req.body.unity,
      };
      
      validateModalityInput(input)
      await this.competitionBusiness.createModality(input)

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message)
    };
  };

  public finishCompetition = async (req: Request, res: Response): Promise<void> => {
    try {

      const message = "REQUEST SUCCESSFULL";

      const competition = req.params.name
      
      await this.competitionBusiness.finishCompetition(competition);

      res.status(200).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };





  public getRanking = async (req: Request, res: Response): Promise<void> => {
    try {
      const modality = req.params.modality

      const result = await this.competitionBusiness.getRanking(modality);

      res.status(200).send(result);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };
}
