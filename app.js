import express from "express";
// Middlewares
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser, { urlencoded } from "body-parser";
import { localsMiddleware } from "./middlewares";
// Routers
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.home, globalRouter);

export default app;
