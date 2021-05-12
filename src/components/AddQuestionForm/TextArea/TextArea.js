const TextArea = (props) => {
    return (
        <label>
            {props.label}
            <textarea
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            />
            <p>Result: {props.result}</p>
        </label>
    )
}
export default TextArea