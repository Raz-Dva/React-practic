import classes from '../Input.module.css';


const Input = (props) => {
    return (
        <>
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
                <p className={classes.TextError} >{!props.valid ? props.errMessage : null}</p>
            </label>
            {/* <input
                type="radio"
                name="rightAnswer"
                className={classes.RightAnsw}
                value={props.index}
                checked={props.rightAnswId === props.index}
                onChange={props.onChangeRadioBtn} /> */}
        </>
    )
}
export default Input