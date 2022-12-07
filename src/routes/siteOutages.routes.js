import { Router } from "express";
import * as siteOutagesController from "../controllers/siteOutages.controllers";
export const siteOutagesRouter = Router();

//* post outages for a specific site with enhanced info
siteOutagesRouter.post("/:siteId", siteOutagesController.addAllOutageInfoForOneSite);