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
        const stateFormControl = this.state.formControls
        // console.log(this.state.formControls)
        // console.log(this.props.arrQuize)
        this.props.addNewQuestion(
            {
                id: this.props.arrQuize.length +1,
                question: stateFormControl.textareaControl.value,
                rightAnswerId: 1,
                answers: [
                    { text: stateFormControl.inputControl1.value, id: 1, choice: null },
                    { text: stateFormControl.inputControl2.value, id: 2, choice: null }
                ]
            }
        )
        // create and send new Question
        // need callback
        // add right answer
    }
    render() {
        return (
            <form>
                <h2>Add Question Form</h2>
                <p> How many consonants are there in the English alphabet?</p>
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