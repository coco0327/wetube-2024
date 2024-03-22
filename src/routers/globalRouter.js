import express from "express";
import { homepageVideos, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", homepageVideos);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
