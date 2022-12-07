import { logHttpErr, logHttpReq, logHttpRes } from "../middlewares/logger.middlewares";
import { HttpStatusEnum, ErrorMessageEnum } from "../utils/enums";
import * as siteOutagesService from "../services/siteOutages.services";

export const addAllOutageInfoForOneSite = async (req, res) => {
    const { siteId=undefined } = req.params;
    const bodyData = req.body;
    if ( bodyData.length === 0 || typeof siteId !== "string" || siteId === "" || siteId === undefined ) {
        return res.status(HttpStatusEnum.BAD_REQUEST).json({message: ErrorMessageEnum.MISSING_PARAMETERS});
    }
    logHttpReq(req.reqId, req.method, req.originalUrl, siteId, siteId, bodyData);
    try {
        const result = await siteOutagesService.addAllOutageInfoForOneSite(siteId, bodyData);
        if (result === undefined || result === null) {
            res.status(HttpStatusEnum.NOT_FOUND).json({message: ErrorMessageEnum.NOT_FOUND});
        }
        logHttpRes(req.reqId, req.method, req.originalUrl, HttpStatusEnum.OK);
        return res.status(HttpStatusEnum.OK).json();
    } catch (error) {
        logHttpErr(req.reqId, error);
        res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).json({message: ErrorMessageEnum.INTERNAL_SERVER_ERROR});
    }
}