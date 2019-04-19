//외장 모듈
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import logger from "morgan";
import helmet from "helmet";

import routes from "./routes/routes"
import userRouter from "./routes/userRouter";;
import globalRouter from "./routes/globalRouter";
import videoRouter from "./routes/videoRouter";

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(logger('dev'));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;