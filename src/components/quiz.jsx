import React from 'react'
import "./quiz.css"
import data from "../assets/data.js"
import { useState } from 'react'

const Quiz = () => {
   
    const [currentIndex,setcurrentIndex]=useState(0);
    const [question , setquestion]=useState(data[currentIndex]);
    const [lock , setlock] = useState(false);

    function checkAnswer(e,ans){
  if(!lock)
        {  if(question.ans==ans){
                   
                 e.target.classList.add("correct");
                 setlock(true);
          }

          else{
            e.target.classList.add("wrong")
            setlock(true);
          }
        
        }
    }
  return (
    <div className='quiz'>
        <h2>QUIZ-APP</h2>
        <hr />
        <p>Q.{currentIndex+1} {data[currentIndex].question}</p>
        <ul>
            <li onClick={(e)=>checkAnswer(e,1)}>{data[currentIndex].option1}</li>
            <li onClick={(e)=>checkAnswer(e,2)}>{data[currentIndex].option2}</li>
            <li onClick={(e)=>checkAnswer(e,3)}>{data[currentIndex].option3}</li>
            <li onClick={(e)=>checkAnswer(e,4)}>{data[currentIndex].option4}</li>
        </ul>

        <button onClick={()=> setcurrentIndex((currentIndex)=>currentIndex+1)}>next</button>
        <p id="para">Question {currentIndex+1} out of 5</p>

    </div>
  )
}

export default Quiz