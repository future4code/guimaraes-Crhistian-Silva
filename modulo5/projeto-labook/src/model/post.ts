import { POST_TYPES } from "./types";

export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private authorId: string,
        private createdAt?: Date
        
    ){}

    getId(){
        return this.id
    }
    getPhoto(){
        return this.photo
    }
    getDescription(){
        return this.description
    }
    getType(){
        return this.type
    }
    getCreatedAt(){
        return this.createdAt
    }
    getAuthor(){
        return this.authorId
    }
    setType(newType: POST_TYPES){
        this.type = newType
    }
}