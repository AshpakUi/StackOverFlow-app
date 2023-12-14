import React from 'react'
import { Link } from 'react-router-dom'

function Questions({question}) {
  return (
    <div className='display-question-container'>
        <div className="display-votes-ans">
            <p>{question.upVotes.length - question.downVotes.length}</p>
            <p>votes</p>
        </div>
        <div className="display-votes-ans">
          <p>{question.noOfAnswers}</p>
          <p>answers</p>
        </div>
        <div className="display-question-details">
          <Link to={`/Questions/${question._id}`}>{question.questionTitle}</Link>
          <div className="display-tags-time">
              <div className="display-tags">
                {
                 question.questionTags.map((tag)=>
                 <p key={tag}>{tag}</p>
                 )
                }
              </div>
              <p className="display-time">
                asked {question.askedOn} {question.userPosted}
              </p>
          </div>
        </div>
    </div>
  )
}

export default Questions
