import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword,
  user,
} from "../controllers/userControllers";

const userRouters = express.Router();

userRouters.get(routes.home, user);
userRouters.get(routes.editProfile, editProfile);
userRouters.get(routes.changePassword, changePassword);
userRouters.get(routes.userDetail, userDetail);

export default userRouters;
