import { Router } from "express";
import { outagesRouter } from "./outages.routes";
import { siteOutagesRouter } from "./siteOutages.routes";
import { siteInfoRouter } from "./siteInfo.routes";
export const splitRouter = Router();

splitRouter.use("/outages", outagesRouter);
splitRouter.use("/site-info", siteInfoRouter);
splitRouter.use("/site-outages", siteOutagesRouter);