import React from 'react'
import "./Question.css"
import {Link, useParams} from "react-router-dom"
import upVotes from "../../assets/uparrow.png"
import downVotes from "../../assets/downarrow.png"
import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswer from './DisplayAnswer'

function QuestionDetails() {

const {id} = useParams()
console.log(id,"==>useParams");
  var questionList = [{
    _id:"1",
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
    _id:"2",
    upVotes:3,
    downVotes:2,
    noOfAnswers:2,
    questionTitle:"What is a function",
    questionBody:"It mean to be",
    quenstionTags:["java","node js","react js","mongodb"],
    userPosted:"manoj",
    askedOn:"jan 1",
    userId:"2",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answeredOn:"jan 2",
      userId:"2",
    }]
  },{
    _id:"3",
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
  const result=questionList.filter((question)=>question._id==id)
  console.log(result,"<====");
  return (
    <div className="question-details-page">
{
  questionList===null?
  <h1>Loding....</h1>:
  <>
    {
      questionList.filter((questions)=>questions._id===id).map(question=>
        <div key={question._id}>
          <section className="question-details-container">
            <h1>{question.questionTitle}</h1>
            <div className="question-details-container-2">
              <div className="question-votes">
                <img src={upVotes} alt=""width="28"  />
                <p>{question.upVotes - question.downVotes}</p>
                <img src={downVotes} alt="" width="28" />
              </div>
              <div style={{with:"100%"}}>
                  <p>{question.questionBody}</p>
                  <div className="question-details-tags">
                    {
                      question.quenstionTags.map((tag)=>
                      <p key={tag}>{tag}</p>
                      )
                    }
                  </div>
                  <div className="question-action-user">
                         <div>
                          <button type='button'>Share</button>
                          <button type='button'>Delete</button>
                         </div>
                         <div>
                          <p>asked {question.askedOn}</p>
                          <Link to={`/User/${question.userId}`} className="user-link" style={{color:"#0086d8"}}>
                            <Avatar backgroundColor="orange" px="8px" py="5px" >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                            <div>
                              {question.userPosted}
                            </div>
                          </Link>
                         </div>
                  </div>
              </div>
            </div>
          </section>
             {
              question.noOfAnswers !==0 && (
                <section>
                  <h3>
                    {question.noOfAnswers} Answers
                  </h3>
                  <DisplayAnswer key={question._id} question={question}/>
                </section>
              )
             }
                 <section className='post-ans-container'>
                          <h3>Your Answer</h3>
                          <form >
                            <textarea  cols="30" rows="10"></textarea>
                            <input type="submit"   className='post-ans-btn' value="post Your Answer"/>
                          </form>
                          <p>
                            Browse other Question tagged
                            {
                              question.quenstionTags.map((tag)=>(
                                <Link to="/Tags" key={tag} className='ans-tags' >{tag}</Link>
                              )
                              )
                            }or 
                            <Link to="/AskQuestion" style={{textDecoration:"none",color:"#009dff"}}> ask your own question</Link>
                          </p>
                 </section>
        </div>
        )
    }
  </>
}
    </div>
  )
}

export default QuestionDetails
