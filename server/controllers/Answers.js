import mongoose from "mongoose"
import Questions from "../models/Questions.js"

export const postAnswer =async (req,res)=>{
    const {id:_id}=req.params;
    console.log(_id)

const {noOfAnswers,answerBody,userAnswered}=req.body;

if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("question unavailable...");
}

updateNoOfQuestion(_id,noOfAnswers) 
try {
    const updateQuestion=await Questions.findByIdAndUpdate(_id,{$addToSet:{"answer":[{answerBody,userAnswered,userId:req.userId}]}})
     res.status(200).json(updateQuestion)
} catch (error) {
    res.status(400).json(error)
}
}

export const updateNoOfQuestion = async(_id,noOfAnswers)=>{
    console.log(noOfAnswers);
    try {
        await Questions.findByIdAndUpdate(_id,{$set:{"noOfAnswers":noOfAnswers}})
    } catch (error) {
        console.log(error);
    }
}