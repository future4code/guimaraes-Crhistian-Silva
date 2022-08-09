import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/customError";
import { authenticationData, CreatePostInput, POST_TYPES, RelationsPostInput } from "../model/types";

export const validatePostDTO = (
  input: CreatePostInput,
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

export const validateRelationDTO = (
  input: RelationsPostInput,
  status: { [key: string]: { status: number; message: string } }
): void => {
  if (!input.idSender || !input.idReceiver ) {
    throw new CustomError(
      status.MISSING_PARAMETERS.status,
      status.MISSING_PARAMETERS.message
    );
  }
}
  
export const validateId = (
  id: authenticationData,
  status: { [key: string]: { status: number; message: string } }
): void => {
  if (!id) {
    throw new CustomError(
      status.NOT_FOUND.status,
      status.NOT_FOUND.message
    );
  }
}

export const validateType = (type: POST_TYPES,  status: { [key: string]: { status: number; message: string } }): void =>{
  if(!type){
   throw new CustomError(
      status.MISSING_PARAMETERS.status,
      status.MISSING_PARAMETERS.message
    )
  }else{
    if(type.toLowerCase() !== POST_TYPES.NORMAL && type.toLowerCase() !== POST_TYPES.EVENT){
      type = POST_TYPES.NORMAL
     }
  }
}

