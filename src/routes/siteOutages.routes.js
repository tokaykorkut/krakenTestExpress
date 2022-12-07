import { Router } from "express";
import * as siteOutagesController from "../controllers/siteOutages.controllers";
import { tokenAuth } from "../middlewares/tokenAuth.middlewares";
export const siteOutagesRouter = Router();

//* post outages for a specific site with enhanced info
siteOutagesRouter.post("/:siteId", tokenAuth, siteOutagesController.addAllOutageInfoForOneSite);