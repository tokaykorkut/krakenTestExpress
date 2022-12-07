import winston from "winston";
const { transports, format, createLogger } = winston;
const { combine, colorize, simple, timestamp } = format;

export const logger = {
    http: createLogger({
        format: combine(
            timestamp(),
            colorize({all:true}),
            simple(),
        ),
        transports:[
            new transports.Console()
        ]
    }),
};

export const logHttpErr = ((reqId=99999, message)=>{
    logger.http.error(`RequestID: ${reqId}, Error Message: ${message}`);
});
export const logHttpReq = ((reqId=99999, method, url, params={}, body={})=>{
    logger.http.info(`RequestID: ${reqId}, Method: ${method}, URL: ${url}, Request Params: ${JSON.stringify(params)}, Request Body: ${JSON.stringify(body)}`);
});
export const logHttpRes = ((reqId=99999, method, url, statusCode, payload={})=>{
    logger.http.info(`RequestID: ${reqId}, Method: ${method}, URL: ${url} , Status: ${statusCode} , Payload: ${JSON.stringify(payload)}`);
});