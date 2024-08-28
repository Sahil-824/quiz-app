import React from 'react'
import "./quiz.css"
import data from "../assets/data.js"
import { useState } from 'react'
import { useRef } from 'react'

const Quiz = () => {
   
    const [currentIndex,setcurrentIndex]=useState(0);
    const [question , setquestion]=useState(data[currentIndex]);
    const [lock , setlock] = useState(false);
    const [result,setresult] = useState(false);
    const [score,setscore] = useState(0);


    let option1=useRef(null);
    let option2=useRef(null);
    let option3=useRef(null);
    let option4=useRef(null);



    let option_array=[option1,option2,option3,option4];

    function reset(){
        setcurrentIndex(0);
        setquestion(data[currentIndex]);
        setlock(false);
        setresult(!result)
}

    function next(){ 
         
        if(currentIndex===data.length-1){
            setresult(!result)
        }
       
       else{ setcurrentIndex((currentIndex)=>currentIndex+1)
        setquestion(data[currentIndex]) 
        setlock(!lock)
        option_array.map((option)=>{
            option.current.classList.remove("correct");
            option.current.classList.remove("wrong");
        })}
    }

    function checkAnswer(e,ans){
  if(!lock)
        {  if(question.ans==ans){
                   
                 e.target.classList.add("correct");
                 setlock(true);
                 setscore(score+1);
          }

          else{
            e.target.classList.add("wrong")
            setlock(true);
            option_array[question.ans-1].current.classList.add("correct");
          }
        
        }
    }
  return (
    <>{result===false?<div className='quiz'>
    <h2>QUIZ-APP</h2>
    <hr />
    <p>Q.{currentIndex+1} {data[currentIndex].question}</p>
    <ul>
        <li ref={option1} onClick={(e)=>checkAnswer(e,1)}>{data[currentIndex].option1}</li>
        <li ref={option2} onClick={(e)=>checkAnswer(e,2)}>{data[currentIndex].option2}</li>
        <li ref={option3} onClick={(e)=>checkAnswer(e,3)}>{data[currentIndex].option3}</li>
        <li ref={option4} onClick={(e)=>checkAnswer(e,4)}>{data[currentIndex].option4}</li>
    </ul>

    <button onClick={()=>{next()} }>next</button>
    <p id="para">Question {currentIndex+1} out of {data.length}</p>

</div>:
<div className='quiz'>
<h2>QUIZ-APP</h2>
<hr />
<p>You Scored {score} out of {data.length}</p>
<button onClick={()=>{reset()}}>Reset</button>
</div>
}</>

  )
}

export default Quiz