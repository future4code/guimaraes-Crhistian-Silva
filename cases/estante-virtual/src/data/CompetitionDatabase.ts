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
      await this.getConnection()
        .insert({
          id: competition.id,
          name: competition.name,
          status: competition.status
        })
        .into(CompetitionDatabase.TABLE_COMPETITION);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public createModality = async (modality: ModalityDTO): Promise<void> => {
    try {
      await this.getConnection()
        .insert({
          id: modality.id,
          name: modality.name,
          athlete_name: modality.athlete_name,
          value: modality.value,
          unity: modality.unity,
        })
        .into(CompetitionDatabase.TABLE_MODALITIES);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public async getRanking(modality: string): Promise<ModalityDTO[]> {
    try {
      const result: ModalityDTO[] = await this.getConnection()
        .select("*")
        .from(CompetitionDatabase.TABLE_MODALITIES)
        .where(modality);
      return result;
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  }
}
;
