import { CompetitionDTO } from './../model/competitionTypes';
import { ModalityDTO } from "../model/modalityTypes";

export interface CompetitionRepository {
  createCompetition(competition: CompetitionDTO): Promise<void>;
  createModality(modality: ModalityDTO): Promise<void>;
  getRanking(modality: string): Promise<ModalityDTO[]>;
}