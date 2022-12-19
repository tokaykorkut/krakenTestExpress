import { logHttpErr, logHttpReq, logHttpRes } from "../middlewares/logger.middlewares";
import { HttpStatusEnum, ErrorMessageEnum } from "../utils/enums";
import * as outagesService from "../services/outages.services";

export const getAllOutages = async (req, res) => {
    logHttpReq(req.reqId, req.method, req.originalUrl);
    try {
        const result = await outagesService.getAllOutages();
        if (result === undefined || result === null) {
            return res.status(HttpStatusEnum.NOT_FOUND).json({message: ErrorMessageEnum.NOT_FOUND});
        }
        logHttpRes(req.reqId, req.method, req.originalUrl, HttpStatusEnum.OK, result);
        return res.status(HttpStatusEnum.OK).json(result);
    } catch (error) {
        logHttpErr(req.reqId, error);
        return res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).json({message: ErrorMessageEnum.INTERNAL_SERVER_ERROR});
    }
}
