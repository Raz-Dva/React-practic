const ButtonSend = (props) => {
    return (
        <div>
            <button
            onClick={props.handleSend}
            disabled={!props.disabled}
            >Add Question</button>
        </div>
    )
}
export default ButtonSend