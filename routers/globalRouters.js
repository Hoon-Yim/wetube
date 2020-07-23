import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoControllers";
import { login, logout, join } from "../controllers/userControllers";

const globalRouters = express.Router();

globalRouters.get(routes.home, home);
globalRouters.get(routes.join, join);
globalRouters.get(routes.login, login);
globalRouters.get(routes.logout, logout);
globalRouters.get(routes.search, search);

export default globalRouters;
