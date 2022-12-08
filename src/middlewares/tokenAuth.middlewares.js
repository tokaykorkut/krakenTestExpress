import { v4 } from "uuid";
import { ErrorMessageEnum, HttpStatusEnum } from "../utils/enums";
// * Development
import * as dotenv from "dotenv";
dotenv.config();

export const tokenAuth = (req, res, next) => {
    const reqId = v4();
    req.reqId = reqId;
    if ((req.headers["x-api-key"] === undefined) || (req.headers["x-api-key"] !== process.env.TOKEN )) {
        return res.status(HttpStatusEnum.FORBIDDEN).json({message: ErrorMessageEnum.FORBIDDEN});
    }
    next()
}