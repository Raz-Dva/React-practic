import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends React.Component {
    state = {
        activeQuestion: 0,
        answerState: null,
        freezenAnswer: false,
        quize: [
            {
                id: 1,
                question: 'Which way is anti-clockwise, left or right?',
                rightAnswerId: 2,
                answers: [
                    { text: 'To the Right', id: 1, choice: null },
                    { text: 'To the Left', id: 2, choice: null }
                ]
            },
            {
                id: 2,
                question: 'What color symbolizes peace?',
                rightAnswerId: 2,
                answers: [
                    { text: 'Red', id: 1, choice: null },
                    { text: 'White', id: 2, choice: null }
                ]
            },
            {
                id: 3,
                question: 'How many cards are there in a complete pack of cards?',
                rightAnswerId: 1,
                answers: [
                    { text: 52, id: 1, choice: null },
                    { text: 58, id: 2, choice: null }
                ]
            }
        ]
    };
    onAnswerClickHandler = (answerId, answerNumber) => {
        const quizeState = this.state.quize,
            quizArr = [...this.state.quize];

        const changeStateFunc = (timeOutFunc) => {
            // console.log(typeof timeOutFunc);
            if (answerId === quizeState[answerNumber - 1].rightAnswerId) {
                quizArr[answerNumber - 1].answers[answerId - 1].choice = 'success';
                this.setState({
                    quize: quizArr,
                    freezenAnswer: true
                });
                if(typeof timeOutFunc == 'function' ){timeOutFunc()}                         

            } else {
                quizArr[answerNumber - 1].answers[answerId - 1].choice = 'error';
                this.setState({
                    quize: quizArr,
                    freezenAnswer: true
                });
                if(typeof timeOutFunc == 'function' ){timeOutFunc()}  
            };
        };
        if (this.state.activeQuestion + 1 === quizeState.length) {
            changeStateFunc(null);            
            return false
        };

        changeStateFunc(this.timeOutChange)

    };    

    timeOutChange = () => {
        const timeout = window.setTimeout(() => {
            this.setState({
                activeQuestion: this.state.activeQuestion + 1,
                freezenAnswer: false
            });
            window.clearTimeout(timeout)
        }, 2000)
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <h2>Quiz</h2>
                <div className={classes.QuizWrapper}>
                    <ActiveQuiz
                        onAnswerClick={this.onAnswerClickHandler}
                        answers={this.state.quize[this.state.activeQuestion].answers}
                        question={this.state.quize[this.state.activeQuestion].question}
                        quizeLength={this.state.quize.length}
                        answerNumber={this.state.activeQuestion + 1}
                        freezenAnswer={this.state.freezenAnswer}
                    />
                </div>
            </div>

        )
    }
};
export default Quiz;
