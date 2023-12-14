import React from 'react';
import * as api from "../api/index"

export const  AskQuestions=(questionData,navigate) =>async(dispatch)=>{
  try {
    const {data}=await api.postQuestion(questionData)
    dispatch({type:"POST-QUESTION",payload:data})
    navigate("/")
  } catch (error) {
    console.log(error);
  }

}

