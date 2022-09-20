

export interface ModalityInput{
    competitionName: string;
    athleteName: string;
    value: number | [];
    unity: string;
}

export interface ModalityDTO{
    idCompetition: string;
    name: string;
    athleteName: string;
    value: number | number[];
    unity: string;
}