import { ENUM_STATUS } from "./competitionTypes";

export class Competition {
  constructor(
    private id: string,
    private name: string,
    private status: ENUM_STATUS
  ) {}
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getStatus() {
    return this.status;
  }

  public setStatus(status: ENUM_STATUS) {
    this.status = status;
  }
}
