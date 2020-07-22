import { search } from "core-js/fn/symbol";

// Global
const HOME = "/",
  SEARCH = "/search",
  JOIN = "/join",
  LOGIN = "/login",
  LOGOUT = "/logout",
  // User
  USER = "/user",
  USER_DETAIL = "/:id",
  EDIT_PROFILE = "/:id/edit-profile",
  CHANGE_PASSWORD = "/:id/change-password",
  // Video
  VIDEO = "/video",
  UPLOAD = "/upload",
  VIDEO_DETAIL = "/:id",
  EDIT_VIDEO = "/:id/edit",
  DELETE_VIDEO = "/:id/delete";

const routes = {
  // Global
  home: HOME,
  search: SEARCH,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  // User
  user: USER,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  // Video
  video: VIDEO,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

export default routes;
