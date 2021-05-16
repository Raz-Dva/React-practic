import React from 'react';
import CreateFormControls from './CreateFormControls/CreateFormControls';
import Input from './Input/Input';
import TextArea from './TextArea/TextArea';
import ButtonSend from './Button/Button'

class AddQuestionForm extends React.Component {
    state = {
        isFormValid: false,
        formControls: CreateFormControls()
    }
    createFormItems = () => {
        return Object.keys(this.state.formControls).map((item, index) => {
            const control = this.state.formControls[item]
            return (
                <div key={index}>
                    {item === 'textareaControl' ?
                        <TextArea
                            label={control.label}
                            id={item + index}
                            value={control.value}
                            errMessage={control.errMessage}
                            shouldValidate={!!control.validation}
                            valid={control.valid}
                            onChange={event => this.changeInputHandler(event.target.value, item)}
                            result={this.state.formControls[item].value}
                        />
                        : null}
                    {control.type === 'text' ?
                        <Input
                            label={control.label}
                            id={item + index}
                            type={control.type}
                            value={control.value}
                            errMessage={control.errMessage}
                            shouldValidate={!!control.validation}
                            valid={control.valid}
                            onChange={event => this.changeInputHandler(event.target.value, item)}
                            result={this.state.formControls[item].value}
                        /> : null
                    }</div>
            )

        })
    }
    changeInputHandler = (value, item) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[item] }
        control.value = value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
        formControls[item] = control
        let isFormValid = true;
        Object.keys(formControls).map((name, index) => {
            //             console.log(`${name}
            // valid-${formControls[name].valid}
            // touched- ${formControls[name].touched} 
            // isFormValid-${isFormValid}`)

            isFormValid = formControls[name].valid && isFormValid && formControls[name].touched
        })
        this.setState({
            formControls, isFormValid
        })
    }
    validateControl = (value, validation) => {
        if (!validation) return true
        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.maxlength) {
            isValid = value.length <= validation.maxlength && isValid
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }
    handleSend = (e) => {
        e.preventDefault()
        // console.log(this.state.formControls)
        // console.log(this.props.arrQuize)
        this.props.addNewQuestion(
            {
                id: 4,
                question: 'Who discovered Protons?',
                rightAnswerId: 1,
                answers: [
                    { text: 'Rutherford', id: 1, choice: null },
                    { text: 'Dutherford', id: 2, choice: null }
                ]
            }
        )
        // create and send new Question

        // need callback
    }
    render() {
        return (
            <form>
                <h2>Add Question Form</h2>
                {this.createFormItems()}
                <ButtonSend
                    handleSend={(event) => { this.handleSend(event) }}
                    disabled={this.state.isFormValid}
                />
            </form>
        )
    }
}

export default AddQuestionForm