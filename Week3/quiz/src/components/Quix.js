
import React, { useState } from 'react';
export default function Quix() {
	const questions = [
		{
			questionText: 'What is the purpose of `setState()` in React?',
			answerOptions: [
				{ answerText: 'Update state', isCorrect: true },
				{ answerText: 'Set props', isCorrect: false },
				{ answerText: 'Modify DOM', isCorrect: false },
				{ answerText: 'Render UI', isCorrect: false },
			],
		},
		{
			questionText: 'Which method is called after a component is rendered to the DOM?',
			answerOptions: [
				{ answerText: 'componentDidMount()', isCorrect: true },
				{ answerText: 'componentDidUpdate()', isCorrect: false },
				{ answerText: 'componentWillUnmount()', isCorrect: false },
				{ answerText: 'setState()', isCorrect: false },
			],
		},
		{
			questionText: 'What is the key difference between props and state in React?',
			answerOptions: [
				{ answerText: 'Accessibility', isCorrect: true },
				{ answerText: 'Mutability', isCorrect: false },
				{ answerText: 'Scope', isCorrect: false },
				{ answerText: 'Inheritance', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is true about functional components in React?',
			answerOptions: [
				{ answerText: 'They contain only functions and no state', isCorrect: true },
				{ answerText: "They can't receive props", isCorrect: false },
				{ answerText: 'They are slower than class components', isCorrect: false },
				{ answerText: 'They always return JSX', isCorrect: false },
			],
		},
		{
			questionText: 'What is the purpose of the virtual DOM in React?',
			answerOptions: [
				{ answerText: 'Improve performance', isCorrect: true },
				{ answerText: 'Directly modify the DOM', isCorrect: false },
				{ answerText: 'Manage state', isCorrect: false },
				{ answerText: 'Control props', isCorrect: false },
			],
		},
		{
			questionText: 'Which method is called before a component is unmounted from the DOM?',
			answerOptions: [
				{ answerText: 'componentWillUnmount()', isCorrect: true },
				{ answerText: 'componentDidMount()', isCorrect: false },
				{ answerText: 'componentDidUpdate()', isCorrect: false },
				{ answerText: 'setState()', isCorrect: false },
			],
		},
	];
	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

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
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
