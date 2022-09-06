/* export class CustomError extends Error{
    constructor(
        public statusCode: number, 
        public message:string){
        super(message)
    }
} */

export class CustomError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
    this.status = status;
  }
}
