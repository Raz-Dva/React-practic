import React from 'react';
import classes from './AnswerItem.module.css'

const AnswerItem = (props) => {
    console.log(props.unswerNumber)
    return (
        <li
         className={classes.AnswerItem}
         onClick={()=>props.onAnswerClick(props.answer.id, props.unswerNumber)}>
            {props.answer.text}
        </li>
    )
};
export default AnswerItem;