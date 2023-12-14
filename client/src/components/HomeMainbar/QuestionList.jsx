import React from 'react'
import Questions from './Questions'

function QuestionList({questionList}) {
  return (
    <div>
       {questionList.map((question)=>{
        return(
          <Questions question={question} key={question._id} />
        )
  })}
    </div>
  )
}

export default QuestionList
