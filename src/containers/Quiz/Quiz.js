import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends React.Component {
    state={
        quize:[
            
        ]
    }
    render(){
        return (
            <div className={classes.Quiz}>
                <h2>Quiz</h2>
                <div className={classes.QuizWrapper}>
                    <ActiveQuiz/>
                </div>
            </div>

        )
    }
};
export default Quiz;
