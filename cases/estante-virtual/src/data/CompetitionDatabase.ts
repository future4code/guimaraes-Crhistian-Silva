import { ENUM_STATUS } from './../model/competitionTypes';
import { CompetitionRepository } from "../business/CompetitionRepository";
import { CustomError } from "../error/CustomError";
import { CompetitionDTO } from "../model/competitionTypes";
import { ModalityDTO } from "../model/modalityTypes";
import { BaseDatabase } from "./Basedatabase";

export class CompetitionDatabase extends BaseDatabase implements CompetitionRepository {
  private static TABLE_COMPETITION = "COMPETITION";
  private static TABLE_MODALITIES = "MODALITIES";

  public createCompetition = async (competition: CompetitionDTO): Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert({
          id: competition.id,
          name: competition.name,
          status: competition.status
        })
        .into(CompetitionDatabase.TABLE_COMPETITION);
    } catch (error: any) {
      throw new CustomError(500, error.message || error.sqlMessage);
    }
  };

  public async getCompetition(competition: string): Promise<CompetitionDTO> {
    try {
      const result: CompetitionDTO[] = await BaseDatabase.connection
        .select("*")
        .from(CompetitionDatabase.TABLE_COMPETITION)
        .where("name", competition);
      return result[0];
    } catch (error: any) {
      throw new CustomError(500, error.message || error.sqlMessage);
    }
  }

  public createModality = async (modality: ModalityDTO): Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert({
          id_competition: modality.idCompetition,
          name: modality.name,
          athlete_name: modality.athleteName,
          value: modality.value,
          unity: modality.unity,
        })
        .into(CompetitionDatabase.TABLE_MODALITIES);
    } catch (error: any) {
      throw new CustomError(500, error.message || error.sqlMessage);
    }
  };

  public updateCompetition = async (status: string, competitionName:string): Promise<void> => {
    try {
      await BaseDatabase.connection
        .update({status:status})
        .into(CompetitionDatabase.TABLE_COMPETITION)
        .where("name", competitionName);
    } catch (error: any) {
      throw new CustomError(500, error.message || error.sqlMessage);
    }
  };

  public async getRanking(modality: string): Promise<any> {
    try {
      const result= await BaseDatabase.connection
        .select("athlete_name as athleteName", "value", "unity")
        .from(CompetitionDatabase.TABLE_MODALITIES)
        .where("name", modality)
        .orderBy("value", "desc")
      return result;
    } catch (error: any) {
      throw new CustomError(500, error.message || error.sqlMessage);
    }
  }
}
;
