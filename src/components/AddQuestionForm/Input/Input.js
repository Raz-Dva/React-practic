const Input = (props) => {
    return (
            <label>
                {props.label}
            <input
             type={props.type}
             id={props.id}
             value={props.value}
             onChange={props.onChange}
              />
              {/* <p>Result: {props.result}</p> */}
            <p style={{'color':'red'}}>{!props.valid ? (props.errMessage + props.value.length): null}</p>
            </label>
    )
}
export default Input