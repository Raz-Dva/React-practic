import classes from './Button.module.css';
const ButtonSend = (props) => {
    return (
        <div>
            <button
            className={classes.Button}
            onClick={props.handleSend}
            disabled={!props.disabled}
            >Add Question</button>
        </div>
    )
}
export default ButtonSend