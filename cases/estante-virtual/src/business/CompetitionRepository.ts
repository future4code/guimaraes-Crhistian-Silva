import { CompetitionDTO } from './../model/competitionTypes';
import { ModalityDTO } from "../model/modalityTypes";

export interface CompetitionRepository {
  createCompetition(competition: CompetitionDTO): Promise<void>;
  getCompetition(competition: string): Promise<CompetitionDTO>;
  createModality(modality: ModalityDTO): Promise<void>;
  finishCompetition(modality: string): Promise<void>;
  getRanking(modality: string): Promise<ModalityDTO[]>;
}