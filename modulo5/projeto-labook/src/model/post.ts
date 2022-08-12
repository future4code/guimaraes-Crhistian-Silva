import { POST_TYPES } from "./postTypes";

export class Post {
  constructor(
    private photo: string,
    private description: string,
    private type: POST_TYPES,
    private authorId: string,
    private createdAt?: Date | undefined
  ) {}
  getPhoto() {
    return this.photo;
  }
  getDescription() {
    return this.description;
  }
  getType() {
    return this.type;
  }
  getCreatedAt() {
    return this.createdAt;
  }
  getAuthor() {
    return this.authorId;
  }
  setType(newType: POST_TYPES) {
    this.type = newType;
  }
  checkType(type: POST_TYPES) {
    if (
      type.toLowerCase() !== POST_TYPES.NORMAL &&
      type.toLowerCase() !== POST_TYPES.EVENT
    ) {
      this.setType(POST_TYPES.NORMAL);
    }
  }
}
