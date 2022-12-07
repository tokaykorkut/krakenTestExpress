import { fetchAllOutageData } from "../apiData/fetchData";
import { logHttpErr, logHttpReq, logHttpRes } from "../middlewares/logger.middlewares";
import { ErrorMessageEnum } from "../utils/enums";

export const getAllOutages = async () => {
    try {
        return await fetchAllOutageData();
    } catch (error) {
        throw new Error(error.message || ErrorMessageEnum.ERROR);
    }
}
