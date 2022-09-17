
export class Modality {

  constructor(
    private id: string,
    private name: string,
    private athleteName: string,
    private value: number,
    private unity: string,
  ) {
  }
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getAthleteName() {
    return this.athleteName;
  }

  getValue() {
    return this.value;
  }

  getUnity() {
    return this.unity;
  }
  
}
