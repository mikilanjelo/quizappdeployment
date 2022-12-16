import './App.css';
import React, {useEffect, useState} from 'react';
import Trivia from './component/Trivia';
import Timer from './component/Timer';
import Start from './component/Start';
function App() {
  const[questionNumber, setQuestionNumber]=useState(1)
  const [clock, setClock] = useState(false);
  const [earned, setEarned] = useState('$ 0')
  const [userName, setUserName] = useState(null)
  const data=[
    {id:1,
      question:'olumo is found in which state in Nigeria ?',
      answer:[
        {
          text:'Gigawa',
          correct: false,
        },
        {
          text:'Lagos',
          correct: false,
        },
        {
          text:'Ogun',
          correct: true,
        },
        {
          text:'Osun',
          correct: false,
        },


      ]
    },
    {id:2,
      question:'How many continent make the world ?',
      answer:[
        {
          text:'8',
          correct: false,
        },
        {
          text:'7',
          correct: true,
        },
        {
          text:'5',
          correct: false,
        },
        {
          text:'10',
          correct: false,
        },


      ]
    },
    {id:1,
      question:'The capital city of the United State Of America is?',
      answer:[
        {
          text:'Washington DC',
          correct: true,
        },
        {
          text:'NewYork',
          correct: false,
        },
        {
          text:'Florida',
          correct: false,
        },
        {
          text:'Texas',
          correct: false,
        },


      ]
    },
  ]
  const moneyPyramid=[
    {id:1, amount: '$ 100'},
    {id:2, amount: '$ 200'},
    {id:3, amount: '$ 300'},
    {id:4, amount: '$ 500'},
    {id:5, amount: '$ 1000'},
    {id:6, amount: '$ 2000'},
    {id:7, amount: '$ 3000'},
    {id:8, amount: '$ 4000'},
    {id:9, amount: '$ 8000'},
    {id:10, amount: '$ 16000'},
    {id:11, amount: '$ 32000'},
    {id:12, amount: '$ 64000'},
    {id:13, amount: '$ 125000'},
    {id:14, amount: '$ 250000'},
    {id:15, amount: '$ 1000000'},

  ].reverse();

  useEffect(()=>{
    questionNumber > 1 && setEarned(moneyPyramid.find((m)=> m.id === questionNumber -1).amount)
  })
  return (

    <div className="app">
      {userName ? (<>


      <div className='main'>
      {clock ? <h1 style={{textAlign:'center'}}> You Earn: {earned}</h1>: (
       <>
        <div className='topContainer'>
        <div className='timer'>
          <Timer setClock={setClock} questionNumber={questionNumber} />
        </div>
      </div>

      <div className='bottomContainer'>
        <Trivia data={data} setClock={setClock} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
      </div>
       
       </> 
      )}
      <div className='topContainer'>
        <div className='timer'>30</div>
      </div>

      <div className='bottomContainer'>
        <Trivia data={data} setClock={setClock} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
      </div>
    </div>
    <div className='pyramid'>
      {moneyPyramid.map((x) =>(
        <li className={questionNumber === x.id ? 'moneylist active':'moneylist'}>
          <span className='moneylistItemnumber'>{x.id}</span>
          <span className='moneylistItemamount'>{x.amount}</span>
        </li>
      ))}
    </div>
      </>) : (<Start setUserName={setUserName} />)}
    
    </div>
  );
}

export default App;
