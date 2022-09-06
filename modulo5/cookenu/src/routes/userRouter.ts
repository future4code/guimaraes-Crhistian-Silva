import { UserDatabase } from "./../data/UserDatabase";
import { UserBusiness } from "./../business/UserBusiness";
import express from "express";
import { UserController } from "../controller/UserController";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { MailDataBase } from "../services/MailTransporter";

export const userRouter = express.Router();

const hashManager = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new IdGenerator();
const emailConfirmation = new MailDataBase();
const userDB = new UserDatabase();

const userBusiness = new UserBusiness(
  userDB,
  hashManager,
  authenticator,
  idGenerator,
  emailConfirmation
);

const userController = new UserController(userBusiness);

userRouter.post("/signup", (req, res) => userController.signUp(req, res));

userRouter.post("/login", (req, res) => userController.login(req, res));

userRouter.get("/profile", (req, res) => userController.getUser(req, res));

userRouter.post("/follow", (req, res) => userController.followUser(req, res));

userRouter.delete("/unfollow", (req, res) =>
  userController.unfollowUser(req, res)
);

userRouter.get("/feed", (req, res) => userController.getFeed(req, res));

userRouter.get("/:id", (req, res) => userController.getUserById(req, res));

userRouter.delete("/profile/delete", (req, res) =>
  userController.delAccount(req, res)
);

userRouter.patch("/password", (req, res) =>
  userController.forgotPassword(req, res)
);

userRouter.patch("/password/:id/:token", (req, res) =>
  userController.updatePassword(req, res)
);
