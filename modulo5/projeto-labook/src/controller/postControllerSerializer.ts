import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/customError";
import { PostDTO } from "../model/postDTO";
import { authenticationData } from "../model/types";

export const validatePostDTO = (
  input: PostDTO,
  status: { [key: string]: { status: number; message: string } }
): void => {
  if (!input.photo || !input.description || !input.type || !input.authorId) {
    throw new CustomError(
      status.MISSING_PARAMETERS.status,
      status.MISSING_PARAMETERS.message
    );
  }
};

export const validateIdAuthor = async (
  id: string,
  status: { [key: string]: { status: number; message: string } }
): Promise<void> => {
  const user = new UserDatabase();
  const userList = await user.getUserById(id);

  if (!userList.length) {
    throw new CustomError(
      status.UNAUTHORIZED.status,
      status.UNAUTHORIZED.message
    );
  }
};

export const validateIdPost = (
  id: authenticationData,
  status: { [key: string]: { status: number; message: string } }
): void => {
  if (!id) {
    throw new CustomError(
      status.ID_POST_ERROR.status,
      status.ID_POST_ERROR.message
    );
  }
};
