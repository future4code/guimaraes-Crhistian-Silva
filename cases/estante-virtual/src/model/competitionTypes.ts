export enum ENUM_STATUS{
    OPEN = "OPEN",
    CLOSED = "CLOSED",
    TO_START = "TO START"

}

export interface CompetitionInput{
    name: string;
    status: ENUM_STATUS;
}


export interface CompetitionDTO{
    id: string;
    name: string;
    status: ENUM_STATUS;
}
