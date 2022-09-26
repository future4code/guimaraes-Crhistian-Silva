import { Ranking } from "./../model/modalityTypes";
import {
  CompetitionDTO,
  CompetitionInput,
  ENUM_STATUS,
} from "./../model/competitionTypes";
import { Modality } from "./../model/Modality";
import { ModalityDTO, ModalityInput } from "../model/modalityTypes";
import { CompetitionRepository } from "./CompetitionRepository";
import { IdGenerator } from "../services/IdGenerator";
import { CompetitionNotFound, ModalityNotFound } from "../error/CustomError";
import { Competition } from "../model/Competition";
import {
  validateCompetitionStatus,
  validateCompetitionUpdate,
} from "../controller/CompetitionControllerSerializer";
export class CompetitionBusiness {
  constructor(
    private competitionDB: CompetitionRepository,
    private idGenerator: IdGenerator
  ) {}

  public createCompetition = async (input: CompetitionInput): Promise<void> => {
    const { name, status } = input;

    const id: string = this.idGenerator.generateId();

    const competition = new Competition(id, name, status);

    const newCompetition = {
      id: competition.getId(),
      name: competition.getName(),
      status: competition.getStatus(),
    };

    await this.competitionDB.createCompetition(newCompetition);
  };

  public getCompetition = async (name: string): Promise<CompetitionDTO> => {
    const competitionName = name.toLowerCase().trim();

    const competition: CompetitionDTO = await this.competitionDB.getCompetition(
      competitionName
    );

    if (!competition) {
      throw new CompetitionNotFound();
    }
    return competition;
  };

  public createModality = async (input: ModalityInput): Promise<void> => {
    const { competitionName, athleteName, value, unity } = input;

    // aqui busco  a competição para adicionar o id dela na tabela de modalidades e também verificar o status dela

    const competition = await this.competitionDB.getCompetition(
      competitionName
    );

    validateCompetitionStatus(competition);

    if (competition.status === ENUM_STATUS.TO_START) {
      await this.competitionDB.updateCompetition(
        ENUM_STATUS.OPEN,
        competitionName
      );
    }

    if (competition.name.toLowerCase() === "javelin throw") {
      const values = value as [];
      const maxValue = values.reduce(function (prev, current) {
        return prev > current ? prev : current;
      });

      const modality = new Modality(
        competition.id,
        competitionName,
        athleteName,
        maxValue,
        unity
      );

      const newModality = {
        idCompetition: modality.getIdCompetition(),
        name: modality.getName(),
        athleteName: modality.getAthleteName(),
        value: modality.getValue(),
        unity: modality.getUnity(),
      };
      await this.competitionDB.createModality(newModality);
    } else {
      const modality = new Modality(
        competition.id,
        competitionName,
        athleteName,
        value,
        unity
      );

      const newModality = {
        idCompetition: modality.getIdCompetition(),
        name: modality.getName(),
        athleteName: modality.getAthleteName(),
        value: modality.getValue(),
        unity: modality.getUnity(),
      };
      await this.competitionDB.createModality(newModality);
    }
  };

  public finishCompetition = async (competitionName: string): Promise<void> => {
    const competition = await this.competitionDB.getCompetition(
      competitionName
    );

    validateCompetitionUpdate(competition);

    await this.competitionDB.updateCompetition(
      ENUM_STATUS.FINISHED,
      competitionName
    );
  };

  public getRanking = async (modality: string): Promise<any> => {
    let message: string = "";

    const competition = await this.competitionDB.getCompetition(modality);

    const result = await this.competitionDB.getRanking(modality);

    if (!result.length) {
      throw new ModalityNotFound();
    }

    if (competition.status === ENUM_STATUS.OPEN) {
      message = "This modality is still open";
    } else if (competition.status === ENUM_STATUS.FINISHED) {
      message = "This modality has ended";
    }
    
    const ranking = {
      message,
      result,
    };
    return ranking;
  };
}
