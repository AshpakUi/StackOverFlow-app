import Questions from "../models/Questions.js";

export const askQuestions=async(req,res)=>{
const postQuestionData=req.body;
const postQuestion=new Questions({...postQuestionData,userId:req.userId})
try {
    await postQuestion.save();
    res.status(200).json("Posted a question successfully ");
} catch (error) {
    res.status(409).json("Could not post a new question");
}
}

export const getAllQuestions=async(req,res)=>{
try {
    const questionList = await Questions.find()
    res.status(200).json(questionList)
} catch (error) {
    res.status(404).json({message:error.message});
}
}