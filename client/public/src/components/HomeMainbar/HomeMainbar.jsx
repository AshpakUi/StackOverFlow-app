import React from 'react'
import {useLocation,useNavigate} from "react-router-dom"
import QuestionList from './QuestionList'
import "./HomeMainbar.css"

function HomeMainbar() {
  var questionList=[{
    _id:1,
    upVotes:3,
    downVotes:4,
    noOfAnswers:2,
    questionTitle:"What is a function",
    questionBody:"It mean to be",
    quenstionTags:["java","node js","react js","mongodb"],
    userPosted:"mono",
    askedOn:"jan 1",
    userId:1,
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answeredOn:"jan 2",
      userId:2,
    }]
  },{
    _id:2,
    upVotes:3,
    downVotes:2,
    noOfAnswers:2,
    questionTitle:"What is a function",
    questionBody:"It mean to be",
    quenstionTags:["java","node js","react js","mongodb"],
    userPosted:"manoj",
    askedOn:"jan 1",
    userId:2,
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answeredOn:"jan 2",
      userId:2,
    }]
  },{
    _id:3,
    upVotes:3,
    downVotes:2,
    noOfAnswers:2,
    questionTitle:"What is a function",
    questionBody:"It mean to be",
    quenstionTags:["java","node js","react js","mongodb"],
    userPosted:"priya",
    askedOn:"jan 1",
    userId:3,
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answeredOn:"jan 2",
      userId:2,
    }]
  }]
   const user = null
  const navigate=useNavigate()

  const location =useLocation()

  const checkAuth=()=>{
    if(user === null){
      alert("login or sing up to ask a question")
      navigate("/Auth")
    }else{
      navigate("AskQuestion")
    }
  }
  
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
         {
          location.pathname==="/"?<h1>Top Question</h1>:<h1>All Question</h1>
         }
         <button onClick={()=>checkAuth()}  className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionList===null?<h1>Loading...</h1>:<><p>{questionList.length} questions</p>
          <QuestionList questionList={questionList}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
