const createFormItems = {
    textareaControls: {
        validation: {
            required: true,
            maxlength: 70,
            minLength: 5
        },
        errMessage: 'The number of allowed characters is from 5 to 70.'
    },
    inputControls: {
        validation: {
            required: true,
            maxlength: 30
        },
        type: 'text',
        errMessage: 'This field cannot be empty and cannot exceed 30 characters.'
    },
    defaultControls: {
        value: '',
        valid: true,
        touched: false
    }
};
const CreateFormControls = () => {
    const formControls = {
        textareaControl: {
            ...createFormItems.defaultControls,
            ...createFormItems.textareaControls,
            label: 'Question'
        },
        inputControl1: {
            ...createFormItems.defaultControls,
            ...createFormItems.inputControls,
            label: 'Answer 1'
        },
        inputControl2: {
            ...createFormItems.defaultControls,
            ...createFormItems.inputControls,
            label: 'Answer 2'
        }
    };
    return formControls
};
export default CreateFormControls