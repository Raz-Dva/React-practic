import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span className={classes.Font_bold}>
                   {props.unswerNumber}) {props.question}
                </span>
                <small className={classes.Badge}>{props.unswerNumber} from {props.quizeLength}</small>
            </p>
            <AnswersList
            unswerNumber={props.unswerNumber}
            quizItem={props.quizItem}
             answers={props.answers}
             onAnswerClick={props.onAnswerClick}/>
        </div>
    )

};
export default ActiveQuiz;

