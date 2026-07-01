import React from 'react'
import { useState , useRef} from 'react';
import { data } from '../../assets/data';
import './quiz.css'
const quiz = ({ theme }) => {
  let [index, setIndex] = useState(0);  //useState(0) is a hook
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore]=useState(0);
  let [result, setResult]=useState(false)

   let Option1=useRef(null);       //useRef(null) is a hook
   let Option2=useRef(null);
   let Option3=useRef(null);
   let Option4=useRef(null);

    let option_array=[Option1,Option2,Option3,Option4];
  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct")
        setLock(true);
        setScore(prev=>prev+1);
      }
      else {
        e.target.classList.add("wrong")
        setLock(true);
        option_array[question.ans-1].current.classList.add("correct")
      }
    }

  }

  const next=()=>{
    if (lock===true){
      if(index===data.length-1){
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      })
    }
  }

  const reset=()=>{
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false); }
  return (
    <div
  className={`container
    ${theme.container}
    w-full
    max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
    mx-auto
    sm:p-6 md:p-8
    rounded-lg
    shadow-lg
   
  `}
>
  <h1 className={`${theme.text} text-2xl sm:text-3xl font-bold text-center `}>
    Quiz App
  </h1>

  <hr className={` border-2 ${theme.accent}`} />

  {!result && (
    <>
      <h2 className={`${theme.text}  sm:text-xl font-semibold `}>
        {index + 1}. {question.question}
      </h2>

      <ul >
        <li
          ref={Option1}
          onClick={(e) => checkAns(e, 1)}
           className=" transition  "
        >
          {question.option1}
        </li>

        <li
          ref={Option2}
          onClick={(e) => checkAns(e, 2)}
           className=" transition  "
        >
          {question.option2}
        </li>

        <li
          ref={Option3}
          onClick={(e) => checkAns(e, 3)}
           className="transition  "
        >
          {question.option3}
        </li>

        <li
          ref={Option4}
          onClick={(e) => checkAns(e, 4)}
          className="transition  "
        >
          {question.option4}
        </li>
      </ul>

      <button
        onClick={next}
        className={`
          ${theme.primary}
          w-full sm:w-auto
          px-6 py-2
          mt-6
          text-sm sm:text-base
          text-white
          font-bold
          rounded-md
          hover:opacity-80
          transition
          center
        `}
      >
        Next
      </button>

      <div className={`${theme.text} index  text-sm sm:text-base font-semibold text-center`}>
        {index + 1} of {data.length} questions
      </div>
    </>
  )}

  {result && (
    <>
      <h2 className={`${theme.text} text-xl sm:text-2xl font-bold text-center mt-6`}>
        You Scored {score} out of {data.length}
      </h2>

      <button
        onClick={reset}
        className={`
          ${theme.primary}
          w-full sm:w-auto
          px-6 py-2
          mt-6
          text-sm sm:text-base
          text-white
          font-bold
          rounded-md
          hover:opacity-80
          transition
          
        `}
      >
        Reset
      </button>
    </>
  )}
</div>

  
  ) 
}
export default quiz
