import { v4 } from "uuid";
import { ErrorMessageEnum, HttpStatusEnum } from "../utils/enums";

export const tokenAuth = (req, res, next) => {
    const reqId = v4();
    req.reqId = reqId;
    if ((req.headers["x-api-key"] === undefined) || (req.headers["x-api-key"] !== "EltgJ5G8m44IzwE6UN2Y4B4NjPW77Zk6FJK3lL23" || process.env.TOKEN )) {
        return res.status(HttpStatusEnum.FORBIDDEN).json({message: ErrorMessageEnum.FORBIDDEN});
    }
    next()
}