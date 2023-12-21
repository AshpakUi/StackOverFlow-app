import express from "express";
import {AskQuestions,getAllQuestions,deleteQuestion} from "../controllers/Questions.js"


const router = express.Router();


router.post("/Ask",AskQuestions)
router.get("/get",getAllQuestions)
router.delete("/delete/:id",deleteQuestion)


export default router;