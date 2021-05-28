import classes from '../Input.module.css';


const Input = (props) => {
    return (
        <label>
            {props.label}
            <input
            className={classes.Input}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            />
            <p className={classes.TextCharacters}>Number of characters: {props.value.length}</p>
            <p style={{ 'color': 'red' }}>{!props.valid ? props.errMessage : null}</p>
        </label>
    )
}
export default Input