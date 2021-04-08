import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span className={classes.Font_bold}>
                   {props.question}
                </span>
                <small className={classes.Badge}>4 from 12</small>
            </p>
            <AnswersList
             answers={props.answers}
             onAnswerClick={props.onAnswerClick}/>
        </div>
    )

};
export default ActiveQuiz;

