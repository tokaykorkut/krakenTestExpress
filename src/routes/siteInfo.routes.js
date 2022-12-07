import { Router } from "express";
import * as siteInfoController from "../controllers/siteInfo.controllers";
import { tokenAuth } from "../middlewares/tokenAuth.middlewares";
export const siteInfoRouter = Router();

//* get info about a specific site
siteInfoRouter.get("/:siteId", tokenAuth, siteInfoController.getOneSiteInfo);