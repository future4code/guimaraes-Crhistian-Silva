import { CompetitionInput } from './../model/competitionTypes';
import { Modality } from './../model/Modality';
import { ModalityDTO, ModalityInput } from '../model/modalityTypes';
import { CompetitionRepository } from './CompetitionRepository';
import { IdGenerator } from '../services/IdGenerator';
import { ModalityNotFound } from '../error/CustomError';
import { Competition } from '../model/Competition';
export class ModalityBusiness {
  constructor(
    private competitionDB: CompetitionRepository,
    private idGenerator: IdGenerator
  ){}

  public createCompetition= async (input: CompetitionInput): Promise<void> => {

    const {name, status} =  input
  
    const id: string = this.idGenerator.generateId();
    
    const competition = new Competition(id, name, status)

    const newCompetition = {
      id: competition.getId(),
      name: competition.getName(),
      status: competition.getStatus()
    }

    await this.competitionDB.createCompetition(newCompetition)
  };

  public createModality = async (input: ModalityInput): Promise<void> => {
    const { name, athleteName, value, unity} = input;

    const id: string = this.idGenerator.generateId();
    
    const modality = new Modality(id, name,athleteName,value,unity);

    const newModality = {
      id: modality.getId(),
      name: modality.getName(),
      athlete_name: modality.getAthleteName(),
      value: modality.getValue(),
      unity: modality.getUnity(),
    }

    await this.competitionDB.createModality(newModality)
  };

  public getRanking = async (modality: string): Promise<ModalityDTO[]> => {

    const result = await this.competitionDB.getRanking(modality);

    if (!result.length) {
      throw new ModalityNotFound();
    }
    return result;
  };
 
}
