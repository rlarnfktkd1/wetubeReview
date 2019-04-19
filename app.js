//외장 모듈
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import logger from "morgan";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(logger('dev'));

// app.get('/', function (req, res) {
//     res.send("Hello Javascript");
// })

export default app;