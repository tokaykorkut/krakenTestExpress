import { fetchAllOutageData } from "../apiData/fetchData";
import { logHttpErr, logHttpReq, logHttpRes } from "../middlewares/logger.middlewares";
import { HttpStatusEnum, ErrorMessageEnum } from "../utils/enums";
import * as siteInfoService from "../services/siteInfo.services";

export const getOneSiteInfo = async (req, res) => {
    const { siteId=undefined } = req.params;
    if ( typeof siteId !== "string" || siteId === "" || siteId === undefined ) {
        return res.status(HttpStatusEnum.BAD_REQUEST).json({message: ErrorMessageEnum.MISSING_PARAMETERS});
    }
    logHttpReq(req.reqId, req.method, req.originalUrl, siteId);
    try {
        const result = await siteInfoService.getOneSiteInfo(siteId);
        console.log(result)
        if (result === undefined || result === null) {
            res.status(HttpStatusEnum.NOT_FOUND).json({message: ErrorMessageEnum.NOT_FOUND});
        }
        logHttpRes(req.reqId, req.method, req.originalUrl, HttpStatusEnum.OK, result);
        return res.status(HttpStatusEnum.OK).json(result);
    } catch (error) {
        logHttpErr(req.reqId, error);
        return res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).json({message: ErrorMessageEnum.INTERNAL_SERVER_ERROR});
    }
}