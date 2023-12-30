import express from "express";
import {AskQuestions,getAllQuestions,deleteQuestion,voteQuestion} from "../controllers/Questions.js"
import auth from "../middleware/auth.js";

const router = express.Router();


router.post("/Ask",auth,AskQuestions)
router.get("/get",getAllQuestions)
router.delete("/delete/:id", auth, deleteQuestion)
router.patch("/votes/:id", auth, voteQuestion)


export default router;