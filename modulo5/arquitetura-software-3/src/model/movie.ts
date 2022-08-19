export class Movie {
    constructor(
      private id: string,
      private title: string,
      private description: string,
      private duration: string,
      private releaseYear: string
    ) { }
    
    getId() {
      return this.id
    }
  
    getTitle() {
      return this.title
    }
  
    getDescription() {
      return this.description
    }
  
    getDuration() {
      return this.duration
    }

    getReleaseYear(){
        return this.releaseYear
    }
  
    setId(newId: string) {
      this.id = newId
    }
  
    setTitle(newTitle: string) {
      this.title = newTitle
    }
  
    setDescription(newDescription: string) {
      this.description = newDescription
    }
  
    setDuration(newDuration: string) {
      this.duration = newDuration
    }
  }
  