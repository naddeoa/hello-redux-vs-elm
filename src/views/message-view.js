import React from 'react';
import Message from '../types/message.js';

const MessageView = ({message}) => {
    return (
        <span>{message.text}</span>
    )
}

MessageView.propTypes = {
    message: React.PropTypes.instanceOf(Message)
}

export default MessageView;
