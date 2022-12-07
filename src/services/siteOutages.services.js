import { logHttpErr, logHttpReq, logHttpRes } from "../middlewares/logger.middlewares";
import { ErrorMessageEnum } from "../utils/enums";
import { pushAllOutageInfoForOneSite } from "../apiData/fetchData";

export const addAllOutageInfoForOneSite = async (siteId, bodyData) => {
    try {
        return await pushAllOutageInfoForOneSite(siteId, bodyData);
    } catch (error) {
        throw new Error(error.message || ErrorMessageEnum.ERROR);
    }
}