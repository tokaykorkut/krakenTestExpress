import express from "express";
import helmet from "helmet";
import { logger } from "./middlewares/logger.middlewares";
import cookieParser from "cookie-parser";
import { splitRouter } from "./routes/index.routes";

// * Development
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());
app.use(cookieParser());

app.use(splitRouter);

const server = app.listen(port, (error)=> {
    try {
        logger.http.info(`App is on Port: ${port}`);
    } catch (error) {
        logger.http.error(`Server crashed , ${error}`);
    }
});