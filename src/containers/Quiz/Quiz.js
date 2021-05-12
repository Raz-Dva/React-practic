import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends React.Component {
    state = {
        countCorrectAnswers: 0,
        finished: true,
        showResultsQuiz: false,
        showAddQuestionForm:true,
        activeQuestion: 0,
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
            if (answerId === quizeState[answerNumber - 1].rightAnswerId) {
                quizArr[answerNumber - 1].answers[answerId - 1].choice = 'success';
                this.setState({
                    quize: quizArr,
                    freezenAnswer: true,
                    countCorrectAnswers: this.state.countCorrectAnswers + 1
                });
                if (typeof timeOutFunc == 'function') { timeOutFunc() }

            } else {
                quizArr[answerNumber - 1].answers[answerId - 1].choice = 'error';
                this.setState({
                    quize: quizArr,
                    freezenAnswer: true
                });
                if (typeof timeOutFunc == 'function') { timeOutFunc() }
            };
        };


        if (this.state.activeQuestion + 1 === quizeState.length) {
            changeStateFunc(this.finishedQuizFun);
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
    finishedQuizFun = () => {
        const timeout = window.setTimeout(() => {
            this.setState({
                finished: true
            });
            window.clearTimeout(timeout)
        }, 2000)
    };
    retryHandler = () => {
        const quizArr = [...this.state.quize];
        quizArr.forEach((question) => {
            question.answers.forEach((answer) => {
                answer.choice = null
            })
        });

        this.setState({
            countCorrectAnswers: 0,
            finished: null,
            activeQuestion: 0,
            freezenAnswer: false,
            showResultsQuiz: false,
            quize: quizArr
        })
    };
    showResultsHandler=()=>{
        this.setState({
            showResultsQuiz:true
        })
    }
    addQuestionHandler =()=>{
        this.setState({
            showAddQuestionForm:true
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <h2>Quiz</h2>
                <div className={classes.QuizWrapper}>

                    {this.state.finished ?
                        <FinishedQuiz
                            countCorrectAnswers={this.state.countCorrectAnswers}
                            quizeLength={this.state.quize.length}
                            onRetry={this.retryHandler}
                            showResultsHandler={this.showResultsHandler}
                            addQuestionFormHandler={this.addQuestionHandler}
                            showAddQuestionForm= {this.state.showAddQuestionForm}
                            showResultsQuiz = {this.state.showResultsQuiz}
                            freezenAnswer={this.state.freezenAnswer}
                            quiz= {this.state.quize}

                        />
                        : <ActiveQuiz
                            onAnswerClick={this.onAnswerClickHandler}
                            answers={this.state.quize[this.state.activeQuestion].answers}
                            question={this.state.quize[this.state.activeQuestion].question}
                            quizeLength={this.state.quize.length}
                            answerNumber={this.state.activeQuestion + 1}
                            freezenAnswer={this.state.freezenAnswer}
                        />}
                </div>
            </div>

        )
    }
};
export default Quiz;
