import { Router } from "express";
import * as siteInfoController from "../controllers/siteInfo.controllers";
export const siteInfoRouter = Router();

//* get info about a specific site
siteInfoRouter.get("/:siteId", siteInfoController.getOneSiteInfo);