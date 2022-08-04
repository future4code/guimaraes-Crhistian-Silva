import { validateInputMovieDTO } from './../services/functions';
import { MovieInputDTO } from './../model/movieDTO';
import { MovieDatabase } from "./../data/MovieDatabase";
import { generateId } from "../services/generateId";
import { Movie } from '../model/movie';
import { CustomError } from '../error/CustomError';
import { StatusCodes } from '../error/StatusCodes';

export class MovieBusiness {
  public async create(input: MovieInputDTO): Promise<void> {
    try {

      const dataMovie: MovieInputDTO =  {
        title: input.title,
        description: input.description,
        duration: input.duration,
        releaseYear: input.releaseYear
      }

       //IMPLANTAÇÃO DE VERIFICAÇÃO DE INPUT
       
       validateInputMovieDTO(dataMovie, StatusCodes)

      const id = generateId();

      const movie:Movie = new Movie(id, dataMovie.title, dataMovie.description, dataMovie.duration, dataMovie.releaseYear )

      const movieDatabase = new MovieDatabase();

      await movieDatabase.create(movie);
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  }

  public async getAll(): Promise<any> {
    try {
      const movieDatabase = new MovieDatabase();
      return await movieDatabase.getAll();
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  }
}
