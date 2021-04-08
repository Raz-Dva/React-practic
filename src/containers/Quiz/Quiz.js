import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends React.Component {
    state={
        quize:[
          {
              answers:[
                  {text: 'Answer1'},
                  {text: 'Answer2'},
                  {text: 'Answer3'},
                  {text: 'Answer4'},
                  {text: 'Answer5'}
              ]
          }  
        ]
    }
    render(){
        return (
            <div className={classes.Quiz}>
                <h2>Quiz</h2>
                <div className={classes.QuizWrapper}>
                    <ActiveQuiz
                    answers={this.state.quize[0].answers}/>
                </div>
            </div>

        )
    }
};
export default Quiz;
