import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/customError";
import { PostDTO } from "../model/postDTO";

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

export const validateIdPost = async (
  id: string,
  status: { [key: string]: { status: number; message: string } }
): Promise<void> => {
  const user = new UserDatabase();
  const userList = await user.getIdUser(id);

  if (!userList.length) {
    throw new CustomError(
      status.UNAUTHORIZED.status,
      status.UNAUTHORIZED.message
    );
  }
};
