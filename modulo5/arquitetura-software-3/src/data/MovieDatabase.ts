import { CustomError } from "../error/CustomError";
import { Movie } from "../model/movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_MOVIE = "LABEFLIX_MOVIE";

  public async create(movie: Movie): Promise<void> {
    try {

      const newMovie = {
        id: movie.getId(),
        title: movie.getDescription(),
        description: movie.getDescription(),
        duration_in_minutes: movie.getDuration(),
        year_of_release: movie.getReleaseYear()
      }
      await MovieDatabase.connection
        .insert(newMovie)
        .into(MovieDatabase.TABLE_MOVIE);
      } catch (error: any) {
        throw new CustomError(error.status, error.message || error.sqlMessage);
      }
  }

  public async getAll(): Promise<Movie> {

    try {
      const movies: any = await MovieDatabase.connection(
        MovieDatabase.TABLE_MOVIE
      ).select("*").orderBy("title");
      //implementada ordenação por Title

      return movies.map((movie:any) => {
        return {
          id: movie.id,
          title: movie.title,
          description: movie.description,
          duration: movie.duration_in_minutes,
          releaseYear: movie.year_of_release,
        };
      });

    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  }
}
