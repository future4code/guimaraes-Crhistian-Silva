import { FeedDTO, FollowDTO, UserDTO, UserFeedDTO } from "./../model/userTypes";

export interface UserRepository {
  insertUser(user: UserDTO): Promise<void>;
  getUserByEmail(email: string): Promise<UserDTO>;
  getUserById(userId: string): Promise<UserDTO>;
  insertFollow(inputRelations: FollowDTO): Promise<void>;
  checkRelations(idFollower: string, idFollowd: string): Promise<FollowDTO[]>;
  unFollowUser(idUserUnfollow: string): Promise<void>;
  getFeed(input: FeedDTO): Promise<UserFeedDTO[]>;
  delAccount(idUser: string): Promise<void>;
  updatePassword(id: string, password: string): Promise<void>;
}
