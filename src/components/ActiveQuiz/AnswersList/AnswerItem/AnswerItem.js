import React from 'react';
import classes from './AnswerItem.module.css'

const AnswerItem = (props) => {
    const classesArr = [classes.AnswerItem];
  if(props.answer.choice){
    classesArr.push(props.answer.choice)

  }
    return (
        <li
            className={classesArr.join(' ')}
            onClick={() => {
                if(props.freezenAnswer){
                    return  false
                }
                props.onAnswerClick(props.answer.id, props.answerNumber)
            }}>
            {props.answer.text}
        </li>
    )
};
export default AnswerItem;