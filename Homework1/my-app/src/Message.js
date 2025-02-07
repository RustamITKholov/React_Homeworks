import './Message.css'
function Message(props) {
    return (
        <div className="content">
            {props.text}
        </div>
    );
}

export default Message;