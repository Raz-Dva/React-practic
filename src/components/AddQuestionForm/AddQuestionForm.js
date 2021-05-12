import React from 'react';
import CreateFormControls from './CreateFormControls/CreateFormControls';
import Input from './Input/Input';
import TextArea from './TextArea/TextArea';

class AddQuestionForm extends React.Component {
    state = {
        formControls: CreateFormControls()
    }
    validateControl=(value, validation)=>{
        if(!validation)return true        

    }

    changeInputHandler = (value, item) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[item] }
        control.value = value
        control.touched = true
        control.valid=this.validateControl(control.value, control.validation)
        formControls[item] = control
        this.setState({
            formControls
        })
        // console.log(this.state.formControls[item].value)
    }
    CreateFormItems = () => {
        return Object.keys(this.state.formControls).map((item, index) => {
            const control = this.state.formControls[item]
            return (
                <div key={index}>
                    {item === 'textareaControl' ?
                        <TextArea
                            label={control.label}
                            id={item + index}
                            type={control.type}
                            value={control.value}
                            errMessage={control.errMessage}
                            shouldValidate={!!control.validation}
                            valid={control.valid}
                            onChange={event => this.changeInputHandler(event.target.value, item)}
                            result={this.state.formControls[item].value}
                        />
                        :
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
                        />
                    }</div>
            )

        })
    }
    render() {
        return (
            <form>
                <h2>Add Question Form</h2>
                {this.CreateFormItems()}
            </form>
        )
    }
}



export default AddQuestionForm