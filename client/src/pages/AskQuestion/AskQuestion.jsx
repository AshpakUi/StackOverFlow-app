import React,{useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

import "./AskQuestion.css"
import { AskQuestions } from "../../actions/question.js"

const AskQuestion=()=>{
    const [questionTitle,setQuestionTile]=useState("");
    const [questionBody,setQuestionBody]=useState("");
    const [questionTags,setQuestionTags]=useState("");

    const dispatch=useDispatch();
    const User = useSelector((state)=>(state.currentUserReducer));
    const navigate=useNavigate();

    const handleSubmit=(e)=>(
        e.preventDefault(),
         dispatch(AskQuestions({questionTitle,questionBody,questionTags,userPosted:User.result.name,userId:User?.result._id},navigate))
     
    )

    const handleEnter=(e)=>{
      if(e.key==="Enter")
      setQuestionBody(questionBody + "\n")
    }
    return(
        <>     
            <div className="ask-question">
                <div className="ask-ques-container">
                    <h1>Ask a public question</h1>
                    <form  onSubmit={handleSubmit} >
                       <div className="ask-form-container">
                        <label htmlFor="ask-questionTitle">
                            <h4>Title</h4>
                            <p>Be specific and imagine you,re asking a question to another person</p>
                            <input type="text"  id="ask-ques-title" placeholder="e.g. is there an R function for finding the index of an element in a vector" onChange={(e)=>setQuestionTile(e.target.value)} />
                        </label>
                        <label htmlFor="ask-questionTitle">
                            <h4>Body</h4>
                            <p>include all the information someone would need to anser your question</p>
                            <textarea name="" id="ask-ques-body" cols="30" rows="10" onChange={(e)=>setQuestionBody(e.target.value)} onKeyPress={handleEnter} ></textarea>
                        
                        </label>
                        <label htmlFor="ask-questionTitle">
                            <h4>Tags</h4>
                            <p>Add up 5 tag to discribe what your question is about</p>
                            <input type="text"  id="ask-ques-tags" placeholder="e.g. (xml typescript wordpress)" onChange={(e)=>setQuestionTags(e.target.value.split(" "))}/>
                        </label>
                       </div>
                       <input type="submit" value="Review your question" className="review-btn" />
                    </form>
                </div>
            </div>
           
        </>
    )
}

export default AskQuestion