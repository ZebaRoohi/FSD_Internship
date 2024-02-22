import React,{useState} from 'react'

const Quix = () => {
    const questions=[
        {
            questionText:'What is the purpose of setState() in react?',
            answerOptions:[
                {answerText:'Set props',isCorrect:false},
                {answerText:'Modify',isCorrect:false},
                {answerText:'Update state',isCorrect:true},
                {answerText:'Render UI',isCorrect:false},
                
            ]
        },
        {
            questionText:'Which method is called after a component is rendered to the DOM',
            answerOptions:[
                {answerText:'ComponentDidUpdate',isCorrect:false},
                {answerText:'ComponentDidMount',isCorrect:true},
                {answerText:'ComponentWillMount',isCorrect:false},
                {answerText:'ComponentUnMount',isCorrect:false},
                
            ]
        },
        {
        questionText:'Which of the following is True about functional component',  
        answerOptions:[
            {answerText:'They cannot recive props',isCorrect:false},
            {answerText:'They are slower than class component',isCorrect:false},
            {answerText:'Control the props',isCorrect:false},
            {answerText:'They contain functions and hooks',isCorrect:true},
            
        ]
    },
    {
    questionText:'What is the difference between props and keys',  
    answerOptions:[
        {answerText:'Mutability',isCorrect:false},
        {answerText:'Accessibility',isCorrect:true},
        {answerText:'Scope',isCorrect:false},
        {answerText:'Inheritance',isCorrect:false},
        
    ]
    },
]

    const[currentQuestion,setCurrentQuestion]=useState(0);
    const[showScore,setShowScore]=useState(false);
    const[score,setScore]=useState(0)
    
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    

  return (
    <div className='container'>
        {showScore?(
            <div className='score-section'>
                You scored {score} out of {questions.length}
                </div>
        ):(
            <>
            <div className='question-section'>
                <div className='question-count'>
                <p>Question {currentQuestion+1}</p>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                    {questions[currentQuestion].answerOptions?.map((answerOption)=>(
                        <button onClick={()=>handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                    ))}
                    </div>
                </>
        )
    
    }
      
    </div>
  )

}
export default Quix
