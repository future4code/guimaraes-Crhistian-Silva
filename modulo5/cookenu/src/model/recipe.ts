export class Recipe {
  constructor(
    private title: string,
    private description: string,
    private preparationMode: string,
    private creationDate?: Date | undefined
  ) {}
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getPreparation() {
    return this.preparationMode;
  }
  getCreation() {
    return this.creationDate;
  }
}
