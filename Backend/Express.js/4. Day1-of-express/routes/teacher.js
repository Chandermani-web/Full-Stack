import express from "express";
import { allteacher, newteacher, updateteacher, deleteteacher } from '../controllers/teacher.js';

const router = express.Router();

router.get("/all", allteacher);
router.post("/create", newteacher);
router.put("/update", updateteacher);
router.delete("/delete", deleteteacher);

export default router;