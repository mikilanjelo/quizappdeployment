import React,{useState, useEffect} from 'react'
import useSound from 'use-sound'
import play from '../asset/play.mp3'
import wrong from '../asset/wrong.mp3'
import correct from '../asset/correct.mp3'
const Trivia = ({data, questionNumber, setQuestionNumber, setClock}) => {
const [question, setQuestion]=useState(null)
const [selectedAnswer, SetSelectedAnswer]=useState(null)
const [className, setClassName]=useState('answer')
const [letPlay]=useSound(play)
const [correctAnswer]=useSound(correct)
const [wrongAnswer]=useSound(wrong)

useEffect(()=> {
  letPlay()
},[letPlay])


useEffect(() => {
  setQuestion(data[questionNumber - 1])
}, [data, questionNumber])

const delay =(duration, callback) => {
  setTimeout(()=>{
    callback()
  },duration)
}
const handleSubmit = (x) => {
  SetSelectedAnswer(x)
  setClassName('answer active')
     delay(3000, () => setClassName(x.correct ? 'answer correect' : 'answerr wrong'))

     
     delay(5000, () =>{
      if(x.correct){
        correctAnswer()
      delay(1000, () =>{
        setQuestionNumber((prev)=> prev + 1)
        SetSelectedAnswer(null)
      })

        }else{
          wrongAnswer()
      }
      
      
     })

}



  return (
    <div className='trivia'>
        <div className='question'>
            <p>{question?.question}</p>
        </div>
        <div className='answers'>
        {/* <div> Welcome</div> */}
           {question?.answer.map((x)=>(
                  <div className={selectedAnswer === x ? className : 'answer'} onClick={()=> handleSubmit(x)}>{x.text}</div>
            
           ))}
        </div>
    </div>
  )
}

export default Trivia