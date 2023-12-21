import mongoose from "mongoose"
import Questions from "../models/Questions.js"

export const postAnswer =async (req,res)=>{
    const {id:_id}=req.params;
const {noOfAnswers,answerBody,userAnswered,userId}=req.body;

if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("question unavailable...");
}

updateNoOfQuestions(_id,noOfAnswers) 
try {
    const updateQuestion=await Questions.findByIdAndUpdate(_id,{$addToSet:{"answer":[{answerBody,userAnswered,userId}]}})
     res.status(200).json(updateQuestion)
} catch (error) {
    res.status(400).json("error in updating")
}
}

export const updateNoOfQuestions = async(_id,noOfAnswers)=>{
    try {
        await Questions.findByIdAndUpdate(_id,{$set:{"noOfAnswers":noOfAnswers}})
    } catch (error) {
        console.log(error);
    }
}

export const deleteAnswer=async(req,res)=>{
const {id:_id}=req.params
const {answerId,noOfAnswers}=req.body
if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("question unavailable...");
    console.log("is not valid id");
}
if(!mongoose.Types.ObjectId.isValid(answerId)){
    return res.status(404).send("Answer unavailable...");
    console.log("is not valid answerid");
}
updateNoOfQuestions(_id,noOfAnswers)
console.log(_id);
try {   
    await Questions.updateOne(
        {_id},
        {$pull: { "answer": {_id:answerId}}}
    )

    res.status(200).json({message:"successfuly deleted..."})
} catch (error) {
    res.status(405).json(error)
}

}