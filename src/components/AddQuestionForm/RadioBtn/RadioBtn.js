import classes from '../Input.module.css';


const RadioBtn = (props) => {
    return (
        <>
        <input
            type="radio"
            name="rightAnswer"
            className={classes.RightAnsw}
            value={props.index}
            checked={props.rightAnswId === props.index}
            onChange={props.onChangeRadioBtn} />
            {props.rightAnswId === props.index ? <i>Right Answer</i>: null}
            
            </>
    )
}
export default RadioBtn