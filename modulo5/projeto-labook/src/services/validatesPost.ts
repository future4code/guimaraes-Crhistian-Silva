import { CustomError } from "../error/customError";
import { Post } from "../model/post";
import { postInputDTO } from "../model/postDTO";
import { POST_TYPES } from "../model/types";

export const validateInputPostDTO = (
  input: postInputDTO,
  status: any
): void => {
  if (!input.photo || !input.description || !input.type || !input.authorId) {
    throw new CustomError(
      status.MISSING_PARAMETERS.status,
      status.MISSING_PARAMETERS.message
    );
  }
};

export const validateType = (type:POST_TYPES):void =>{
  

}

export const validateIdPost = (id: string, status: any): void => {
  if (!id) {
    throw new CustomError(
      status.UNAUTHORIZED.status,
      status.UNAUTHORIZED.message
    );
  }
};

export const validatePostFound = (result: [], status: {[key: string]: { status: number; message: string }}) => {
  if (!result) {
    throw new CustomError(
      status.NOT_FOUND_POST.status,
      status.NOT_FOUND_POST.message
    );
  }
};


