import express from "express";
import {askQuestions} from "../controllers/Questions.js"
import {getAllQuestions} from "../controllers/Questions.js"

const router = express.Router();


router.post("/Ask",askQuestions)
router.get("/get",getAllQuestions)


export default router;