
export class Recipe {
  constructor(
    private authorId: string,
    private title: string,
    private description: string,
    private preparationMode: string,
    private creationDate?: Date | undefined
  ) {}
  getAuthor() {
    return this.authorId;
  }
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
