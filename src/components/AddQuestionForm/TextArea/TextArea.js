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
            <p>Number of characters: {props.value.length}</p>
            <p style={{ 'color': 'red' }}>{!props.valid ? props.errMessage  : null}</p>
        </label>
    )
}
export default TextArea