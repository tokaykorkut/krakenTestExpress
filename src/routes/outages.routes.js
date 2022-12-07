import { Router } from "express";
import * as outagesController from "../controllers/outages.controllers"
import { tokenAuth } from "../middlewares/tokenAuth.middlewares";
export const outagesRouter = Router();

//* get all outages
outagesRouter.get("/", tokenAuth, outagesController.getAllOutages);