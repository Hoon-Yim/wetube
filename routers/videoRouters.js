import express from "express";
import routes from "../routes";
import {
  video,
  videoDetail,
  editVideo,
  deleteVideo,
  upload,
} from "../controllers/videoControllers";

const videoRouters = express.Router();

videoRouters.get(routes.home, video);
videoRouters.get(routes.upload, upload);
videoRouters.get(routes.editVideo, editVideo);
videoRouters.get(routes.deleteVideo, deleteVideo);
videoRouters.get(routes.videoDetail, videoDetail);

export default videoRouters;
