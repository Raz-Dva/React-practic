const ButtonSend = (props) => {
    return (
        <div>
            <button
            onClick={props.handleSend}
            disabled={!props.disabled}// false  заблок  true отблок 
            >Add Question</button>
        </div>
    )
}
export default ButtonSend