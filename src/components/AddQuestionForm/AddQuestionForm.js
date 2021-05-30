import React from 'react';
import CreateFormControls from './CreateFormControls/CreateFormControls';
import Input from './Input/Input';
import TextArea from './TextArea/TextArea';
import ButtonSend from './Button/Button'
import RadioBtn from './RadioBtn/RadioBtn.js'


class AddQuestionForm extends React.Component {
    state = {
        isFormValid: false,
        rightAnswerId: 1,
        formControls: CreateFormControls()
    }
    createFormItems = () => {
        return Object.keys(this.state.formControls).map((item, index) => {
            const control = this.state.formControls[item]
            return (
                <div key={index} className="wrap_input">
                    {item === 'textareaControl' ?
                        <TextArea
                            label={control.label}
                            id={`${item} + ${index}`}
                            value={control.value}
                            errMessage={control.errMessage}
                            shouldValidate={!!control.validation}
                            valid={control.valid}
                            onChange={event => this.changeInputHandler(event.target.value, item)}
                            result={this.state.formControls[item].value}
                        />
                        : null}
                    {control.type === 'text' ?
                        <>
                            <Input
                                label={control.label}
                                id={`${item} + ${index}`}
                                type={control.type}
                                value={control.value}
                                errMessage={control.errMessage}
                                shouldValidate={!!control.validation}
                                valid={control.valid}
                                onChange={event => this.changeInputHandler(event.target.value, item)}
                                result={this.state.formControls[item].value}
                            />
                            <RadioBtn
                                index={index}
                                rightAnswId={this.state.rightAnswerId}
                                onChangeRadioBtn={event => this.changeRadioBtnHandler(event.target.value)} />
                        </> : null
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
        this.props.addNewQuestion(
            {
                id: this.props.arrQuize.length + 1,
                question: stateFormControl.textareaControl.value,
                rightAnswerId: this.state.rightAnswerId,
                answers: [
                    { text: stateFormControl.inputControl1.value, id: 1, choice: null },
                    { text: stateFormControl.inputControl2.value, id: 2, choice: null }
                ]
            }
        )
        this.resetFormHandler()
        // create and send new Question
        // need callback
        // add right answer
    }
    resetFormHandler = () => {
        console.log(this.state.formControls )
        const stateFormControl ={ ...this.state.formControls }
        
        stateFormControl.inputControl1.value = '';
        stateFormControl.inputControl2.value = '';
        stateFormControl.textareaControl.value = '';
        this.setState({
            formControls:stateFormControl
        })
    }
    changeRadioBtnHandler = (e) => {
        this.setState({
            rightAnswerId: +e
        })
    }
    render() {
        return (
            <form>
                <h2>Question Form</h2>
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