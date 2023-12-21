import express from "express"

import {postAnswer,deleteAnswer} from "../controllers/Answers.js"

const router=express.Router()

router.patch("/post/:id",postAnswer)
router.patch("/delete/:id",deleteAnswer)
const {userId,noOfAnswers}=deleteAnswer
export default router