import React from 'react';

class AddQuestionForm extends React.Component {
    state = {
        inputControls: {
           
            textarea: {
                value: '',
                label: '',
                errMessage: 'The field must not be empty',
                valid: false,
                touched: false,
                validation: null,
                validation: {
                    required: true,
                    maxlength: 70,
                    minLength: 5

                }
            },
            input: {
                value: '',
                label: '',
                errMessage: 'The field must not be empty',
                valid: false,
                touched: false,
                validation: null,
                validation: {
                    required: true,
                    maxlength: 30

                }
            }
        }

    }
    createInputs = () => {

        Object.keys({ ...this.state.field, ...this.state.textarea }).map((attr, index) => {
            
        })

    }
    createTextarea = () => {

    }
    render() {
        return (
            <form>
                <h2>Add Question Form</h2>
                <div className='classes.Form_group'>
                    {this.createTextarea()}
                </div>
                <div className='classes.Form_group'>
                    {this.createInputs()}
                </div>
            </form>
        )
    }
}



export default AddQuestionForm