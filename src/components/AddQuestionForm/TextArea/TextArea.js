import classes from '../Input.module.css';

const TextArea = (props) => {
    return (
        <label>
            {props.label}
            <textarea
            className={classes.TextArea}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            />
            <p className={classes.TextCharacters}>Number of characters: {props.value.length}</p>
            <p className={classes.TextError} >{!props.valid ? props.errMessage  : null}</p>
        </label>
    )
}
export default TextArea