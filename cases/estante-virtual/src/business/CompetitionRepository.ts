import { CompetitionDTO } from './../model/competitionTypes';
import { ModalityDTO } from "../model/modalityTypes";

export interface CompetitionRepository {
  createCompetition(competition: CompetitionDTO): Promise<void>;
  getCompetition(competition: string): Promise<CompetitionDTO>;
  createModality(modality: ModalityDTO): Promise<void>;
  updateCompetition(status: string, competitionName: string): Promise<void>;
  getRanking(modality: string): Promise<any>;
}