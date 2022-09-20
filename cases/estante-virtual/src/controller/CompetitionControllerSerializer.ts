import { CompetitionDTO, ENUM_STATUS } from './../model/competitionTypes';
import { CompetitionClosed, CompetitionNotFound, CompetitionNotStarted, MissingParameters } from "../error/CustomError";
import { CompetitionInput } from "../model/competitionTypes";
import { ModalityInput } from "../model/modalityTypes";

export const validateCompetitionInput = (input: CompetitionInput): void => {
  if (!input.name) {
    throw new MissingParameters();
  }
};

export const validateModalityInput = (input: ModalityInput): void => {

  console.log(input)
    if (!input.competitionName || !input.athleteName || !input.value || !input.unity ) {
      throw new MissingParameters();
    }
  };

  export const validateCompetitionStatus = (competition: CompetitionDTO): void => {
    if (!competition) {
      throw new CompetitionNotFound();
    }
    if(competition.status === ENUM_STATUS.FINISHED){
      throw new CompetitionClosed();
    }
  };

  export const validateCompetitionFinish = (competition: CompetitionDTO): void => {
    if (!competition) {
      throw new CompetitionNotFound();
    }
    if(competition.status === ENUM_STATUS.FINISHED){
      throw new CompetitionClosed();
    }
    if(competition.status ===  ENUM_STATUS.TO_START){
      throw new CompetitionNotStarted()
    }
  };


  