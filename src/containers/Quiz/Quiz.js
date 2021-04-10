import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends React.Component {
    state = {
        activeQuestion: 0,
        quize: [
            {
                id: 1,
                question: 'Which way is anti-clockwise, left or right?',
                rightAnswerId: 2,
                answers: [
                    { text: 'To the Right', id: 1 },
                    { text: 'To the Left', id: 2 }
                ]
            },
            {
                id: 2,
                question: 'What color symbolizes peace?',
                rightAnswerId: 2,
                answers: [
                    { text: 'Red', id: 1 },
                    { text: 'White', id: 2 }
                ]
            },
            {
                id: 2,
                question: 'How many cards are there in a complete pack of cards?',
                rightAnswerId: 1,
                answers: [
                    { text: 52, id: 1 },
                    { text: 58, id: 2 }
                ]
            }
        ]
    };
    onAnswerClickHandler = (answerId,  unswerNumber) => {
        const quizeState = this.state.quize;     

        if (answerId === quizeState[unswerNumber-1].rightAnswerId) {
            console.log('Right')
            if (this.state.activeQuestion + 1 === quizeState.length) {
                alert('You won')
                 return false };

            this.setState({
                activeQuestion: this.state.activeQuestion + 1
            })
        }else{
            console.log('False')

        }
        if (this.state.activeQuestion + 1 > quizeState.length) {
             return false };
        

    }
    render() {
        return (
            <div className={classes.Quiz}>
                <h2>Quiz</h2>
                <div className={classes.QuizWrapper}>
                    <ActiveQuiz
                        onAnswerClick={this.onAnswerClickHandler}
                        // quizItem={this.state.quize[this.state.activeQuestion]}
                        answers={this.state.quize[this.state.activeQuestion].answers}
                        question={this.state.quize[this.state.activeQuestion].question}
                        quizeLength={this.state.quize.length}
                        unswerNumber={this.state.activeQuestion + 1} />
                </div>
            </div>

        )
    }
};
export default Quiz;
