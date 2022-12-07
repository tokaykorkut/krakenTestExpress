import { Router } from "express";
import * as outagesController from "../controllers/outages.controllers"
export const outagesRouter = Router();

//* get all outages
outagesRouter.get("/", outagesController.getAllOutages);