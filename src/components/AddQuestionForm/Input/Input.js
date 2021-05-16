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
            <p>Number of characters: {props.value.length}</p>
            <p style={{ 'color': 'red' }}>{!props.valid ? props.errMessage : null}</p>
        </label>
    )
}
export default Input