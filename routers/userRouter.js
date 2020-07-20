import express from "express";
import routes from "../routes";
import {
  changePassword,
  userDetail,
  users,
  editProfile,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
