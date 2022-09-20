
export class Modality {

  constructor(
    
    private idCompetition: string,
    private name: string,
    private athleteName: string,
    private value: number | number[],
    private unity: string,

  ) {}
  getIdCompetition(){
    return this.idCompetition
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
