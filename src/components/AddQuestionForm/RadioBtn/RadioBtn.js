// import classes from '../Input.module.css';


const RadioBtn = (props) => {
    return (
        <input
            type="radio"
            name="rightAnswer"
            // className={classes.RightAnsw}
            value={props.index}
            checked={props.rightAnswId === props.index}
            onChange={props.onChangeRadioBtn} />
    )
}
export default RadioBtn