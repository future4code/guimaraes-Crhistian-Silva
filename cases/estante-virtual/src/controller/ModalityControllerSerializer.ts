import { MissingParameters } from "../error/CustomError";
import { ModalityInput } from "../model/modalityTypes";

export const validateCompetitionInput = (competitionName: string): void => {
  if (!competitionName ) {
    throw new MissingParameters();
  }
};

export const validateModalityInput = (input: ModalityInput): void => {
    if (!input.name || !input.athleteName || !input.value || !input.unity) {
      throw new MissingParameters();
    }
  };

 
  