import { ENUM_STATUS } from "./competitionTypes";

export class Competition {
  constructor(
    private id: string,
    private name: string,
    private status: ENUM_STATUS
  ) {
    this.setStatus(status)
    this.setName(name)
  }
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getStatus() {
    return this.status;
  }

  public setName(name: string){
    this.name = name.toLowerCase().trim()
  }
  
  public setStatus(status: ENUM_STATUS) {
    if (status?.toUpperCase() === ENUM_STATUS.FINISHED) {
      this.status = ENUM_STATUS.FINISHED;
    }
    if (status?.toUpperCase() === ENUM_STATUS.OPEN) {
      this.status = ENUM_STATUS.OPEN;
    } else if (
      status?.toUpperCase() !== ENUM_STATUS.FINISHED &&
      status?.toUpperCase() !== ENUM_STATUS.OPEN
    ) {
      this.status = ENUM_STATUS.TO_START;
    }
  }
}
