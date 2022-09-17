import { ModalityBusiness } from './../business/ModalityBusiness';
import express from "express"
import { ModalityController } from "../controller/ModalityController"
import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const modalityRouter = express.Router()

const modalityDB = new CompetitionDatabase();
const idGenerator = new IdGenerator();

const modalityBusiness = new ModalityBusiness(modalityDB, idGenerator)

const modalityController = new ModalityController(modalityBusiness)

modalityRouter.post('/create', (req, res) => modalityController.createCompetition(req, res) )

modalityRouter.post('/create', (req, res) => modalityController.createModality(req, res) )

modalityRouter.post('/ranking', (req, res) => modalityController.getRanking(req, res) )




