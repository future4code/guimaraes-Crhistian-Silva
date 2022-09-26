import express from "express"
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionController } from "../controller/CompetitionController";
import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const competitionRouter = express.Router()


const competitionDB = new CompetitionDatabase();
const idGenerator = new IdGenerator();

const competitionBusiness = new CompetitionBusiness(competitionDB, idGenerator)

const competitionController = new CompetitionController(competitionBusiness)

competitionRouter.post('/create', (req, res) => competitionController.createCompetition(req, res) )

competitionRouter.get('/:name', (req, res) => competitionController.getCompetition(req, res) )

competitionRouter.post('/modality/create', (req, res) => competitionController.createModality(req, res) )

competitionRouter.put('/:name', (req, res) => competitionController.finishCompetition(req, res) )

competitionRouter.get('/ranking/:name', (req, res) => competitionController.getRanking(req, res) )








