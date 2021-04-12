import React from 'react';
import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = (props) => {
    return (
        <ul className={classes.AnswersList}>
            {
                props.answers.map((answer, index) => {
                    return (
                        <AnswerItem
                            key={index}
                            answerNumber={props.answerNumber}
                            answer={answer}
                            onAnswerClick={props.onAnswerClick}
                            freezenAnswer={props.freezenAnswer}
                        />
                    )
                })
            }
        </ul>
    )
}
export default AnswersList