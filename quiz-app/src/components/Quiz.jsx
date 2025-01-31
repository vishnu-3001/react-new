import { useState,useCallback } from "react"
import Questions from "../questions"
import complete from "../assets/quiz-complete.png"
import QuestionTimer from "./Question-Timer";
// import Input from "./Input";
export default function Quiz(){
    // const[answer,setAnswer]=useState([]);
    const [score,setScore]=useState({score:0,index:0});
    // const activeIndex=answer.length;
    var suffleAnswers;
    if(score.index<Questions.length){
    suffleAnswers=[...Questions[score.index].answers].sort(()=>Math.random()-0.5);
    }
    function handleClick(currentanswer){
        setScore((prevScore) => {
            if (currentanswer === Questions[score.index].answers[0] && currentanswer!=null) {
                return {
                    index: prevScore.index + 1,
                    score: prevScore.score + 1,
                };
            } else {
                return {
                    index: prevScore.index + 1,
                    score: prevScore.score,
                };
            }
        });
    }
    const skipQuestion=useCallback(()=>handleClick(null),[handleClick]);
    return(
        <div id="quiz">
            <div id="question">
                {score.index<Questions.length&&<div>
                    <QuestionTimer timeout={2000} onTimeout={skipQuestion} key={score.index}></QuestionTimer>
                    <h2>{Questions[score.index].text}</h2>
                    <ul id="answers">
                        {suffleAnswers.map((answer,index)=>(
                            <li key={index} className="answer">
                                <button onClick={()=>handleClick(answer)}>{answer}</button>
                                {/* <Input key={index} answer={answer} name={Questions[activeIndex].text}></Input> */}
                            </li>
                        ))}
                    </ul>
                </div>}
                {
                    score.index>=Questions.length&&<div id="summary">
                        <img src={complete}></img>
                        <h2>Your score is {score.score}</h2>
                        </div>
                }
        </div>
        </div>
        
    )
}