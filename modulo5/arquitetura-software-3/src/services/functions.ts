import { MovieInputDTO } from './../model/movieDTO';
import { Movie } from './../model/movie';
import { CustomError } from "../error/CustomError";
import { UserInputDTO } from "./../model/userDTO";

export const validateInputUserDTO = (user: UserInputDTO, status: any): void => {
  if (!user.name || !user.email || !user.password) {
    throw new CustomError(
      status.MISSING_PARAMETERS.status,
      status.MISSING_PARAMETERS.message
    );
  }
};

export const validateInputMovieDTO = (movie: MovieInputDTO, status: any): void => {
  if (!movie.title || !movie.description || !movie.duration || ! movie.releaseYear) {
    throw new CustomError(
      status.MISSING_PARAMETERS.status,
      status.MISSING_PARAMETERS.message
    );
  }
};

export const validateEmail = (email: string): boolean => {
  return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
};

export const validatePassword = (password: string): boolean => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,20}$/.test(password);
};
