import express from "express"
import { homeController } from '../controllers/homeController.js'
import { aboutController } from '../controllers/aboutController.js'

const router = express.Router();

router.get("/homepage" , homeController);
router.get("/aboutpage" , aboutController);

export default router;