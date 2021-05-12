import React from 'react';
import classes from './FinishedQuiz.module.css';
import AnswerItem from '../ActiveQuiz/AnswersList/AnswerItem/AnswerItem'
import AddQuestionForm from '../AddQuestionForm/AddQuestionForm'


const FinishedQuiz = (props) => {
    return (
        <div>
            <h2>End of the quiz</h2>
            <p>Correct answers <span>{props.countCorrectAnswers} of {props.quizeLength} </span></p>
            <br />
            <button
                onClick={props.onRetry}
                type="button"
                className={classes.Button}
            >Start the quiz over</button>
            <button
                onClick={props.showResultsHandler}
                type="button"
                className={classes.Button}
            >Show results</button>
            <button
                type="button"
                className={classes.Button}
                onClick={props.addQuestionFormHandler}>
                Add Question</button>
            <hr />
            {props.showAddQuestionForm ? 
            <AddQuestionForm
            // showAddQuestionForm={props.showAddQuestionForm}
             />
             : null}
            <hr />
            {
                props.showResultsQuiz ?
                    props.quiz.map((quizElement, index) => {
                        return (
                            <div key={index}>
                                <p>{quizElement.question}</p>
                                {quizElement.answers.map((answer, index) => {
                                    return (
                                        < AnswerItem
                                            key={index}
                                            answer={answer}
                                            freezenAnswer={props.freezenAnswer}
                                        />
                                    )
                                })}
                            </div>
                        )
                    })
                    : null}
        </div>
    )
}
export default FinishedQuiz
