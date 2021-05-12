const createFormItems= {
    textareaControls: {
        validation: {
            required: true,
            maxlength: 70,
            minLength: 5
        }
    },
    inputControls: {
        validation: {
            required: true,
            maxlength: 30
        }
    },
    defaultControls: {
        value: '',
        errMessage: 'The field must not be empty',
        valid: false,
        touched: false,
    }
};
 const CreateFormControls = () => {
    const formControls = {            
        textareaControl:{
            ...createFormItems.defaultControls,
            ...createFormItems.textareaControls,
            label:'Question'
        },
        inputControl1:{
            ...createFormItems.defaultControls,
            ...createFormItems.inputControls,
            label:'Answer 1'
        },
        inputControl2:{
            ...createFormItems.defaultControls,
            ...createFormItems.inputControls,
            label:'Answer 2'
        }
    };
    return formControls
};
 export default  CreateFormControls