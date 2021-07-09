import { Router } from "express";

import catchAsync from "../utils/catchAsync";
import { getChannel } from "../controllers/channel.controller";

const router = Router();

router.get("/", catchAsync(getChannel));

export default router;