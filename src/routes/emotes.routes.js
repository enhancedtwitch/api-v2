import { Router } from "express";

import catchAsync from "../utils/catchAsync";
import { getEmotes } from "../controllers/emotes.controller";

const router = Router();

router.get("/", catchAsync(getEmotes));

export default router;