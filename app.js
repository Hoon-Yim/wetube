import express from "express";
// Middlewares
import morgan from "morgan";
import helmet from "helmet";
import bodyParser, { urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import { localsMiddleware } from "./middlewares";
// Routers
import userRouters from "./routers/userRouters";
import globalRouters from "./routers/globalRouters";
import videoRouters from "./routers/videoRouters";
import routes from "./routes";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);
app.use(routes.home, globalRouters);
app.use(routes.user, userRouters);
app.use(routes.video, videoRouters);

export default app;
