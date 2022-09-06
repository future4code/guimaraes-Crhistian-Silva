import { MovieInputDTO } from './../model/movieDTO';
import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
  public async create(req: Request, res: Response): Promise<void> {
    try {

      const message = "SUCESS, MOVIE CREATE" 

      const input: MovieInputDTO ={
        title: req.body.title,
        description: req.body.description,
        duration: req.body.duration,
        releaseYear:req.body.releaseYear
      }

      const movieBusiness = new MovieBusiness();

      await movieBusiness.create(input);

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const movieBusiness = new MovieBusiness();

      const movies = await movieBusiness.getAll();
      res.status(200).send({movies});
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  }
}
