import React from 'react';
import Thread, {emptyThread} from '../types/thread';
import MessageView from '../views/message-view';

const ThreadView = ({thread}) => {
    return (
        <ul>
            {thread.messages.map(message => <li key={message.id}><MessageView message={message} /></li>)}
        </ul>
    )
};

ThreadView.propTypes = {
    thread: React.PropTypes.instanceOf(Thread)
}

ThreadView.defaultProps = {
    thread: emptyThread
};

export default ThreadView;
