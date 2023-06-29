import express from 'express';
import {getData} from "../controller/abattDataController.js"

const apiRouter = express.Router()

apiRouter.get("/:id",getData)

export default apiRouter