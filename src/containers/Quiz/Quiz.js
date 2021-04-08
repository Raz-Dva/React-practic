import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends React.Component {
    state={
        quize:[
          {
              question:'Which way is anti-clockwise, left or right?',
              rightAnswerId:2,
              answers:[                  
                  {text: 'To the Right', id:1},
                  {text: 'To the Left', id:2}
              ]
          }  
        ]
    };
    onAnswerClickHandler=(answerId)=>{
        console.log(answerId)
    }
    render(){
        return (
            <div className={classes.Quiz}>
                <h2>Quiz</h2>
                <div className={classes.QuizWrapper}>
                    <ActiveQuiz
                    onAnswerClick = {this.onAnswerClickHandler}
                    answers={this.state.quize[0].answers}
                    question={this.state.quize[0].question}/>
                </div>
            </div>

        )
    }
};
export default Quiz;
