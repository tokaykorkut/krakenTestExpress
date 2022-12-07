import { fetchSiteInfoData } from "../apiData/fetchData";
import { logHttpErr, logHttpReq, logHttpRes } from "../middlewares/logger.middlewares";
import { ErrorMessageEnum } from "../utils/enums";

export const getOneSiteInfo = async (siteId) => {
    try {
        return await fetchSiteInfoData(siteId);
    } catch (error) {
        throw new Error(error.message || ErrorMessageEnum.ERROR);
    }
}