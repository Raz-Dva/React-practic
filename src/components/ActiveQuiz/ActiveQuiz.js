import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span className={classes.Font_bold}>
                    {props.answerNumber}) {props.question}
                </span>
                <small className={classes.Badge}>{props.answerNumber} from {props.quizeLength}</small>
            </p>
            <AnswersList
                answerNumber={props.answerNumber}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                freezenAnswer={props.freezenAnswer}
            />
        </div>
    )
};
export default ActiveQuiz;

