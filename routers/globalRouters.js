import express from "express";
import routes from "../routes";

const globalRouters = express.Router();

globalRouters.get(routes.home, (req, res) => {
  res.send("Home");
});
globalRouters.get(routes.join, (req, res) => {
  res.send("Join");
});
globalRouters.get(routes.login, (req, res) => {
  res.send("Login");
});
globalRouters.get(routes.logout, (req, res) => {
  res.send("Logout");
});
globalRouters.get(routes.search, (req, res) => {
  res.send("Search");
});

export default globalRouters;
